	var resultado;//variable que guarda todos los textos
	
	var guardados = [];//array que guarda todos los nombres de los archivos ya guardados
	var response = localStorage.getItem("guardados"); //recuperar lo de guardados
	if( response != null){
		guardados = JSON.parse(response);
	}
	
	var tama;//var que guarda el tamaño de guardados para evitar ciclos infinitos
	var fileName;// nombre del archivo a leer
	
	//lovalStore.clear() // quitar lo guardado en local storage
	
function leerArchivo(e) {
    var archivo = e.target.files[0];

    if (!archivo) {
      return;
    }
	fileName = e.target.files[0].name; // leer nombre del archivo a guardar
	// console.log("el nombre del archivo es: ");
	// console.log(fileName);
	tama = guardados.length;//como el for incrementa guardados.length,lo ponemos en tama
	for (var i=0; i<=tama; i++){//mirar si el nombre del archivo está guardado en el array de guardados
		if(guardados[i] == fileName){ return; }
	}		
	for (var i=0; i<=tama; i++){//sino está ya, guardar el nombre del archivo a leer
		guardados.push(fileName);	
		localStorage.setItem("guardados", JSON.stringify(guardados));
	}
	
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;

	    if(resultado == null) {
		  resultado = contenido;
		}else {
			resultado = resultado + '|' + contenido;
		}

		
		mostrarContenido(resultado);
		mostrarHome(resultado);

		// console.log(contenido);
		//mostrarMedios(resultado);
		mostrarMedios(contenido);
		mostrarSucursales(resultado);
	};

    lector.readAsText(archivo); 
}

function obtenerEstado(claveEdo) {
	let estado = "";
	
	switch (claveEdo) {
		case "01": estado = "CDMX"; break;
		case "02": estado = "AGUASCALIENTES"; break;
		case "03": estado = "BC NORTE"; break;
		case "04": estado = "BC SUR"; break;
		case "05": estado = "CAMPECHE"; break;
		case "06": estado = "COAHUILA"; break;
		case "07": estado = "COLIMA"; break;
		case "08": estado = "CHIAPAS"; break;
		case "09": estado = "CHIHUAHUA"; break;
		case "10": estado = "DURANGO"; break;
		case "11": estado = "GUANAJUATO"; break;
		case "12": estado = "GUERRERO"; break;
		case "13": estado = "HIDALGO"; break;
		case "14": estado = "JALISCO"; break;
		case "15": estado = "EDO DE MEXICO"; break;
		case "16": estado = "MICHOACAN"; break;
		case "17": estado = "MORELOS"; break;
		case "18": estado = "NAYARIT"; break;
		case "19": estado = "NUEVO LEON"; break;
		case "20": estado = "OAXACA"; break;
		case "21": estado = "PUEBLA"; break;
		case "22": estado = "QUERETARO"; break;
		case "23": estado = "QUINTANA ROO"; break;
		case "24": estado = "SAN LUIS POTOSI"; break;
		case "25": estado = "SINALOA"; break;
		case "26": estado = "SONORA"; break;
		case "27": estado = "TABASCO"; break;
		case "28": estado = "TAMAULIPAS"; break;
		case "29": estado = "TLAXCALA"; break;
		case "30": estado = "VERACRUZ"; break;
		case "31": estado = "YUCATAN"; break;
		default: estado = "ZACATECAS"; break;
	}

	return estado;
}

function mostrarSucursales(resultado) {
    var archivos = resultado.replaceAll('|', '');
    var filas = archivos.split("\n");
    let medios1 = Array();
    let medios2 = Array();
    let medios3 = Array();
    let medios4 = Array();
    let medios5 = Array();
    let medios6 = Array();
    let medios7 = Array();
    let medios8 = Array();
    let importes1 = Array();
    let importes2 = Array();
    let importes3 = Array();
    let importes4 = Array();
    let importes5 = Array();
    let importes6 = Array();
    let importes7 = Array();
    let importes8 = Array();
    let estados = Array();
    let sucursales = Array();
    const tableBody = document.getElementById("tableDataSuc");
	tableBody.innerHTML = "";
    let dataHtml = '';

    for(let i in filas) {
        var columnas = filas[i].split(",");
        var sucursal = columnas[0].substring(14,18);
        var estado = columnas[0].substring(45,47);
        var medio    = columnas[0].substring(12,13);
        var importe  = columnas[0].substring(33,45);
        var impo     = importe.substring(0, 10) + "." + importe.substring(10, importe.length);

        if (sucursal != null && sucursal.trim() != "") {
            if (!sucursales.includes(sucursal)) {
                sucursales.push(sucursal);
            }

            switch (medio) {
                case "1":
                    if (medios1[sucursal] == null || medios1[sucursal] == "") {
                        medios1[sucursal] = 1;
                        importes1[sucursal] = parseFloat(impo);
                    } else {
                        medios1[sucursal] = medios1[sucursal] + 1;
                        importes1[sucursal] = importes1[sucursal] + parseFloat(impo);
                    }
                    break;
                case "2":
                    if (medios2[sucursal] == null || medios2[sucursal] == "") {
                        medios2[sucursal] = 1;
                        importes2[sucursal] = parseFloat(impo);
                    } else {
                        medios2[sucursal] = medios2[sucursal] + 1;
                        importes2[sucursal] = importes2[sucursal] + parseFloat(impo);
                    }
                    break;
                case "3":
                    if (medios3[sucursal] == null || medios3[sucursal] == "") {
                        medios3[sucursal] = 1;
                        importes3[sucursal] = parseFloat(impo);
                    } else {
                        medios3[sucursal] = medios3[sucursal] + 1;
                        importes3[sucursal] = importes3[sucursal] + parseFloat(impo);
                    }
                    break;
                case "4":
                    if (medios4[sucursal] == null || medios4[sucursal] == "") {
                        medios4[sucursal] = 1;
                        importes4[sucursal] = parseFloat(impo);
                    } else {
                        medios4[sucursal] = medios4[sucursal] + 1;
                        importes4[sucursal] = importes4[sucursal] + parseFloat(impo);
                    }
                    break;
                case "6":
                    if (medios5[sucursal] == null || medios5[sucursal] == "") {
                        medios5[sucursal] = 1;
                        importes5[sucursal] = parseFloat(impo);
                    } else {
                        medios5[sucursal] = medios5[sucursal] + 1;
                        importes5[sucursal] = importes5[sucursal] + parseFloat(impo);
                    }
                    break;
                case "7":
                    if (medios6[sucursal] == null || medios6[sucursal] == "") {
                        medios6[sucursal] = 1;
                        importes6[sucursal] = parseFloat(impo);
                    } else {
                        medios6[sucursal] = medios6[sucursal] + 1;
                        importes6[sucursal] = importes6[sucursal] + parseFloat(impo);
                    }
                    break;
                case "8":
                    if (medios7[sucursal] == null || medios7[sucursal] == "") {
                        medios7[sucursal] = 1;
                        importes7[sucursal] = parseFloat(impo);
                    } else {
                        medios7[sucursal] = medios7[sucursal] + 1;
                        importes7[sucursal] = importes7[sucursal] + parseFloat(impo);
                    }
                    break;
                default:
                    if (medios8[sucursal] == null || medios8[sucursal] == "") {
                        medios8[sucursal] = 1;
                        importes8[sucursal] = parseFloat(impo);
                    } else {
                        medios8[sucursal] = medios8[sucursal] + 1;
                        importes8[sucursal] = importes8[sucursal] + parseFloat(impo);
                    }
                    break;
            }

            estados[sucursal] = estado;
        }
    }

    sucursales.sort();
    sucursales.forEach(function(value, index) {
		// console.log("2staValu",estados[value]);
		let estadoString = obtenerEstado(estados[value]);
        var m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0, m6 = 0, m7 = 0, m8 = 0;
        var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = 0, v8 = 0;

        if (medios1[value] != null && medios1[value] != "") {m1 = medios1[value];}
        if (medios2[value] != null && medios2[value] != "") {m2 = medios2[value];}
        if (medios3[value] != null && medios3[value] != "") {m3 = medios3[value];}
        if (medios4[value] != null && medios4[value] != "") {m4 = medios4[value];}
        if (medios5[value] != null && medios5[value] != "") {m5 = medios5[value];}
        if (medios6[value] != null && medios6[value] != "") {m6 = medios6[value];}
        if (medios7[value] != null && medios7[value] != "") {m7 = medios7[value];}
        if (medios8[value] != null && medios8[value] != "") {m8 = medios8[value];}

        if (importes1[value] != null && importes1[value] != "") {v1 = parseFloat(importes1[value]).toFixed(2);}
        if (importes2[value] != null && importes2[value] != "") {v2 = parseFloat(importes2[value]).toFixed(2);}
        if (importes3[value] != null && importes3[value] != "") {v3 = parseFloat(importes3[value]).toFixed(2);}
        if (importes4[value] != null && importes4[value] != "") {v4 = parseFloat(importes4[value]).toFixed(2);}
        if (importes5[value] != null && importes5[value] != "") {v5 = parseFloat(importes5[value]).toFixed(2);}
        if (importes6[value] != null && importes6[value] != "") {v6 = parseFloat(importes6[value]).toFixed(2);}
        if (importes7[value] != null && importes7[value] != "") {v7 = parseFloat(importes7[value]).toFixed(2);}
        if (importes8[value] != null && importes8[value] != "") {v8 = parseFloat(importes8[value]).toFixed(2);}

        dataHtml += '</tr>';
        dataHtml += '<td>'+value+'</td>';
        dataHtml += '<td>'+m1+'</td><td>'+v1+'</td>';
        dataHtml += '<td>'+m2+'</td><td>'+v2+'</td>';
        dataHtml += '<td>'+m3+'</td><td>'+v3+'</td>';
        dataHtml += '<td>'+m4+'</td><td>'+v4+'</td>';
        dataHtml += '<td>'+m5+'</td><td>'+v5+'</td>';
        // dataHtml += '<td>'+m6+'</td><td>'+v6+'</td>';
        // dataHtml += '<td>'+m7+'</td><td>'+v7+'</td>';
        dataHtml += '<td>'+m8+'</td><td>'+v8+'</td>';
        dataHtml += '<td>'+estadoString+'</td>';
        dataHtml += '</tr>';
    });
    tableBody.innerHTML = tableBody.innerHTML + dataHtml;
	
}


function mostrarMedios(contenido) {
	// console.log(contenido);
	var archivos = contenido.split('|');
	// console.log("archivos : ",archivos);
	for (let index = 0; index < archivos.length; index++) {
		
		var filas = archivos[index].split("\n");

	// console.log(filas);
	var totalDonatSucursal  = 1;
	var totalDonatCat 	    = 1;
	var totalDonatBnet 		= 1;
	var totalDonatBoteo 	= 1;
	var totalDonatAlcancias = 1;
	var totalDonatCodiOtBan = 1;
	var totalDonatCodiciti  = 1;


	var importes = [8];
	var medios = [7];

	importes[0]=0;
	importes[1]=0;
	importes[2]=0;
	importes[3]=0;
	importes[4]=0;
	importes[5]=0;
	importes[6]=0;

	medios[0]=0;
	medios[1]=0;
	medios[2]=0;
	medios[3]=0;
	medios[4]=0;
	medios[5]=0;
	medios[6]=0;

	

	const tableBody = document.getElementById("tableData");
	let dataHtml = '<tr>';
	for(let i in filas) {
		var columnas = filas[i].split(",")
		var hora = columnas[0].substring(8,12);
		var medio    = columnas[0].substring(12,13);
		var importe  = columnas[0].substring(33,45);
		var impo     = importe.substring(0, 10) + "." + importe.substring(10, importe.length);
		
		if (hora!=null && hora.trim()!='') {
			// console.log("hora ",hora);

			// console.log("importe ",impo);
			// console.log("medio ",medio);
			switch (medio) {
				case "1":
					medios[0] = medios[0]+1;
					importes[0]=importes[0]+parseFloat(impo);
					
					break;
				case "2":
					medios[1] = medios[1]+1;
					importes[1]=importes[1]+parseFloat(impo);
				
					break;
				case "4":
					medios[2] = medios[2]+1;
					importes[2]=importes[2]+parseFloat(impo);
				
					break;
				case "6":
					medios[3] = medios[3]+1;
					importes[3]=importes[3]+parseFloat(impo);
				
					break;
				case "7":
					medios[4] = medios[4]+1;
					importes[4]=importes[4]+parseFloat(impo);
				
					break;
				case "8":
					medios[5] = medios[5]+1;
					importes[5]=importes[5]+parseFloat(impo);
				
					break;
			
				default:
					medios[6] = medios[6]+1;
					importes[6]=importes[6]+parseFloat(impo);
					break;
			}
			importes[7]=hora;
		}
		
	}
	dataHtml += '<td>'+medios[0]+'</td><td>'+parseFloat(importes[0]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[1]+'</td><td>'+parseFloat(importes[1]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[2]+'</td><td>'+parseFloat(importes[2]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[3]+'</td><td>'+parseFloat(importes[3]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[4]+'</td><td>'+parseFloat(importes[4]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[5]+'</td><td>'+parseFloat(importes[5]).toFixed(2)+'</td>';
	dataHtml += '<td>'+medios[6]+'</td><td>'+parseFloat(importes[6]).toFixed(2)+'</td>';
	dataHtml += '<td>'+importes[7]+'</td>';

	dataHtml += '</tr>';
	tableBody.innerHTML = tableBody.innerHTML + dataHtml;

	}
	



	/*let tableMedios = document.getElementById('tableM');
	let cuerpoMedios = document.createElement('tbody');
	
	filas.forEach(p => {
		let fila = document.createElement('tr');
		
		let td = document.createElement('td');
		td.innerText = p.substring(12,13);
		fila.appendChild(td);

		td = document.createElement('td');
		td.innerText = p.substring(33,45);
		fila.appendChild(td);

		td = document.createElement('td');
		td.innerText = p.substring(13,14);
		fila.appendChild(td);

		cuerpoMedios.appendChild(fila);
	});

	tableMedios.appendChild(cuerpoMedios);*/


	/*var body = document.getElementsByTagName("body")[0];
	var tabla   = document.createElement("table");
	var tblBody = document.createElement("tbody");
  
	// Crea las celdas
	for (var i = 0; i < 2; i++) {
	  // Crea las hileras de la tabla
	  var hilera = document.createElement("tr");
  
	  for (var j = 0; j < 2; j++) {
		// Crea un elemento <td> y un nodo de texto, haz que el nodo de
		// texto sea el contenido de <td>, ubica el elemento <td> al final
		// de la hilera de la tabla
		var celda = document.createElement("td");
		var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
		celda.appendChild(textoCelda);
		hilera.appendChild(celda);
	  }
  
	  // agrega la hilera al final de la tabla (al final del elemento tblbody)
	  tblBody.appendChild(hilera);
	}
  
	// posiciona el <tbody> debajo del elemento <table>
	tabla.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tabla);
	// modifica el atributo "border" de la tabla y lo fija a "2";
	tabla.setAttribute("border", "2");*/



	
	/*var tamañoi=10;
	var tamañoj=10;
   
// Get the reference of the body element
var body = document.getElementsByTagName("body")[0];

// Create a <table> element and a <tbody> element
var tabla   = document.getElementById("table");
var tblBody = document.getElementById("tableData");

// Create the cells
for (var i = 0; i < tamañoi; i++) {
// Create the rows of the table
var hilera = document.createElement("tr");

for (var j = 0; j < tamañoj; j++) {
// Create a <td> element and a text node, make the node
// text be the content of <td>, place the <td> element at the end
// of the row of the table
var celda = document.createElement("td");
var textoCelda = document.createTextNode("["+i+","+j+"]");
celda.appendChild(textoCelda);
hilera.appendChild(celda);
}

// add the row to the end of the table (at the end of the tblbo elementdy)
tblBody.appendChild(hilera);
}

// position the <tbody> under the <table> element
tabla.appendChild(tblBody);
// append <table> into <body>
body.appendChild(tabla);*/

}

function mostrarHome(resultado) {
	resultado = resultado.replaceAll('|','')
	var filas = resultado.split("\n");

	var totalSucursal  = 0;
	var totalCodiOtBan = 0;
	var totalBnet	   = 0;
	var totalCat 	   = 0;
	var totalBoteo 	   = 0;
	var totalAlcancias = 0;
	var totalCodiCiti  = 0;

	var totalDonatSucursal  = 1;
	var totalDonatCat 	    = 1;
	var totalDonatBnet 		= 1;
	var totalDonatBoteo 	= 1;
	var totalDonatAlcancias = 1;
	var totalDonatCodiOtBan = 1;
	var totalDonatCodiciti  = 1;

	
	var totalEfectDonatSucursal 	= 1;
	var totalCheqBanDonatSucursal 	= 1;
	var totalCheqOtBanDonatSucursal = 1;
	var totalTarjCitiDonatSucursal  = 1;
	var totalTarjOtBanDonatSucursal = 1;
	var totalAmerExpDonatSucursal 	= 1;

	var totalEfectTotSucursal 	  = 0;
	var totalCheqBanTotSucursal   = 0;
	var totalCheqOtBanTotSucursal = 0;
	var totalTarjCitiTotSucursal  = 0;
	var totalTarjOtBanTotSucursal = 0;
	var totalAmerExpTotSucursal   = 0;

	var totalTarjCitiDonatCat  = 1;
	var totalTarjOtBanDonatCat = 1;
	var totalAmerExpDonatCat   = 1;

	var totalTarjCitiTotCat  = 0;
	var totalTarjOtBanTotCat = 0;
	var totalAmerExpTotCat   = 0;

	var totalEfectDonatBnet  = 1;
	var totalEfectTotBnet  = 0;

	for(var i in filas) {
		var columnas = filas[i].split(",");
		var medio    = columnas[0].substring(12,13);
		var importe  = columnas[0].substring(33,45);
		var impo     = importe.substring(0, 10) + "." + importe.substring(10, importe.length);
		var tipo     = columnas[0].substring(13,14);
	

		switch (medio) {
			case '1':
				totalSucursal += parseFloat(impo);
				document.getElementById("impoSucursal").innerHTML = "$"+totalSucursal.toFixed(2);
				document.getElementById("donatSucursal").innerHTML = totalDonatSucursal;
				totalDonatSucursal++;

				if(tipo == '1') {
					document.getElementById("efectDonatSucu").innerHTML = totalEfectDonatSucursal;
					totalEfectDonatSucursal++;

					totalEfectTotSucursal += parseFloat(impo);
					document.getElementById("efectTotSucu").innerHTML = "$"+totalEfectTotSucursal.toFixed(2);

				}else if(tipo == '2'){
					document.getElementById("cheqBanDonatSucu").innerHTML = totalCheqBanDonatSucursal;
					totalCheqBanDonatSucursal++;

					totalCheqBanTotSucursal += parseFloat(impo);
					document.getElementById("cheqBanTotSucu").innerHTML = "$"+totalCheqBanTotSucursal.toFixed(2);

				}else if(tipo == '3'){
					document.getElementById("cheqOtBanDonatSucu").innerHTML = totalCheqOtBanDonatSucursal;
					totalCheqOtBanDonatSucursal++;

					totalCheqOtBanTotSucursal += parseFloat(impo);
					document.getElementById("cheqOtBanTotSucu").innerHTML = "$"+totalCheqOtBanTotSucursal.toFixed(2);

				}else if(tipo == '4'){
					document.getElementById("tarjCitiDonatSucu").innerHTML = totalTarjCitiDonatSucursal;
					totalTarjCitiDonatSucursal++;

					totalTarjCitiTotSucursal += parseFloat(impo);
					document.getElementById("tarjCitiTotSucu").innerHTML = "$"+totalTarjCitiTotSucursal.toFixed(2);

				}else if(tipo == '5'){
					document.getElementById("tarjOtBanDonatSucu").innerHTML = totalTarjOtBanDonatSucursal;
					totalTarjOtBanDonatSucursal++;

					totalTarjOtBanTotSucursal += parseFloat(impo);
					document.getElementById("tarjOtBanTotSucu").innerHTML = "$"+totalTarjOtBanTotSucursal.toFixed(2);

				}else if(tipo == '6'){
					document.getElementById("AmerExpDonatSucu").innerHTML = totalAmerExpDonatSucursal;
					totalAmerExpDonatSucursal++;

					totalAmerExpTotSucursal += parseFloat(impo);
					document.getElementById("AmerExpTotSucu").innerHTML = "$"+totalAmerExpTotSucursal.toFixed(2);
				}

				break;
			case '2':
				totalCat += parseFloat(impo);
				document.getElementById("impoCat").innerHTML = "$"+totalCat.toFixed(2);
				document.getElementById("donatCat").innerHTML = totalDonatCat;
				totalDonatCat++;

				if(tipo == '1') {
					// document.getElementById("efectDonatSucu").innerHTML = totalEfectDonatSucursal;
					// totalEfectDonatSucursal++;

					// totalEfectTotSucursal += parseFloat(impo);
					// document.getElementById("efectTotSucu").innerHTML = "$"+totalEfectTotSucursal.toFixed(2);

				}else if(tipo == '2'){
					// document.getElementById("cheqBanDonatSucu").innerHTML = totalCheqBanDonatSucursal;
					// totalCheqBanDonatSucursal++;

					// totalCheqBanTotSucursal += parseFloat(impo);
					// document.getElementById("cheqBanTotSucu").innerHTML = "$"+totalCheqBanTotSucursal.toFixed(2);

				}else if(tipo == '3'){
					// document.getElementById("cheqOtBanDonatSucu").innerHTML = totalCheqOtBanDonatSucursal;
					// totalCheqOtBanDonatSucursal++;

					// totalCheqOtBanTotSucursal += parseFloat(impo);
					// document.getElementById("cheqOtBanTotSucu").innerHTML = "$"+totalCheqOtBanTotSucursal.toFixed(2);

				}else if(tipo == '4'){
					document.getElementById("tarjCitiDonatCat").innerHTML = totalTarjCitiDonatCat;
					totalTarjCitiDonatCat++;

					totalTarjCitiTotCat += parseFloat(impo);
					document.getElementById("tarjCitiTotSCat").innerHTML = "$"+totalTarjCitiTotCat.toFixed(2);

				}else if(tipo == '5'){
					document.getElementById("tarjOtBanDonatCat").innerHTML = totalTarjOtBanDonatCat;
					totalTarjOtBanDonatCat++;

					totalTarjOtBanTotCat += parseFloat(impo);
					document.getElementById("tarjOtBanTotCat").innerHTML = "$"+totalTarjOtBanTotCat.toFixed(2);

				}else if(tipo == '6'){
					document.getElementById("AmerExpDonaTCat").innerHTML = totalAmerExpDonatCat;
					totalAmerExpDonatCat++;

					totalAmerExpTotCat += parseFloat(impo);
					document.getElementById("AmerExpTotCat").innerHTML = "$"+totalAmerExpTotCat.toFixed(2);
				}

				break;
			case '3':
				break;
			case '4':
				totalBnet += parseFloat(impo);
				document.getElementById("impoBnet").innerHTML = "$"+totalBnet.toFixed(2);
				document.getElementById("donatBnet").innerHTML = totalDonatBnet;
				totalDonatBnet++;

				if(tipo == '1') {
					document.getElementById("efectDonatBnet").innerHTML = totalEfectDonatBnet;
					totalEfectDonatBnet++;

					totalEfectTotBnet += parseFloat(impo);
					document.getElementById("efectTotBnet").innerHTML = "$"+totalEfectTotBnet.toFixed(2);

				}else if(tipo == '2'){
					// document.getElementById("cheqBanDonatSucu").innerHTML = totalCheqBanDonatSucursal;
					// totalCheqBanDonatSucursal++;

					// totalCheqBanTotSucursal += parseFloat(impo);
					// document.getElementById("cheqBanTotSucu").innerHTML = "$"+totalCheqBanTotSucursal.toFixed(2);

				}else if(tipo == '3'){
					// document.getElementById("cheqOtBanDonatSucu").innerHTML = totalCheqOtBanDonatSucursal;
					// totalCheqOtBanDonatSucursal++;

					// totalCheqOtBanTotSucursal += parseFloat(impo);
					// document.getElementById("cheqOtBanTotSucu").innerHTML = "$"+totalCheqOtBanTotSucursal.toFixed(2);

				}else if(tipo == '4'){
					// document.getElementById("tarjCitiDonatSucu").innerHTML = totalTarjCitiDonatSucursal;
					// totalTarjCitiDonatSucursal++;

					// totalTarjCitiTotSucursal += parseFloat(impo);
					// document.getElementById("tarjCitiTotSucu").innerHTML = "$"+totalTarjCitiTotSucursal.toFixed(2);

				}else if(tipo == '5'){
					// document.getElementById("tarjOtBanDonatSucu").innerHTML = totalTarjOtBanDonatSucursal;
					// totalTarjOtBanDonatSucursal++;

					// totalTarjOtBanTotSucursal += parseFloat(impo);
					// document.getElementById("tarjOtBanTotSucu").innerHTML = "$"+totalTarjOtBanTotSucursal.toFixed(2);

				}else if(tipo == '6'){
					// document.getElementById("AmerExpDonatSucu").innerHTML = totalAmerExpDonatSucursal;
					// totalAmerExpDonatSucursal++;

					// totalAmerExpTotSucursal += parseFloat(impo);
					// document.getElementById("AmerExpTotSucu").innerHTML = "$"+totalAmerExpTotSucursal.toFixed(2);
				}
				break;
			case '5':
				break;
			case '6':
				totalBoteo += parseFloat(impo);
				document.getElementById("impoBoteo").innerHTML = "$"+totalBoteo.toFixed(2);
				document.getElementById("donatBoteo").innerHTML = totalDonatBoteo;
				totalDonatBoteo++;
				break;
			case '7':
				totalAlcancias += parseFloat(impo);
				document.getElementById("impoAlcancias").innerHTML = "$"+totalAlcancias.toFixed(2);
				document.getElementById("donatAlcancias").innerHTML = totalDonatAlcancias;
				totalDonatAlcancias++;
				break;
			case '8':
				totalCodiOtBan += parseFloat(impo);
				document.getElementById("impoCodiOtBan").innerHTML = "$"+totalCodiOtBan.toFixed(2);
				document.getElementById("donatCodiOtBan").innerHTML = totalDonatCodiOtBan;
				totalDonatCodiOtBan++;
				break;
			case '9':
				totalCodiCiti += parseFloat(impo);
				document.getElementById("impoCodiCiti").innerHTML = "$"+totalCodiCiti.toFixed(2);
				document.getElementById("donatCodiCiti").innerHTML = totalDonatCodiciti;
				totalDonatCodiciti++;
				break;
			default:
				break;
		}

	}	

	var sumaImportes = parseFloat(totalSucursal.toFixed(2)) + parseFloat(totalCat.toFixed(2)) + parseFloat(totalBnet.toFixed(2)) + parseFloat(totalBoteo.toFixed(2)) + parseFloat(totalAlcancias.toFixed(2)) + parseFloat(totalCodiOtBan.toFixed(2)) + parseFloat(totalCodiCiti.toFixed(2));
	document.getElementById("totalImportes").innerHTML = "$"+sumaImportes.toFixed(2);

	var sumaDonativos = (totalDonatSucursal-1) + (totalDonatCat-1) + (totalDonatBnet-1) + (totalDonatBoteo-1) + (totalDonatAlcancias-1) + (totalDonatCodiOtBan-1) + (totalDonatCodiciti-1);
	document.getElementById("totalDonativos").innerHTML = sumaDonativos;
}

function mostrarContenido(resultado) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = resultado;
}
  
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
	
function savefile(){
	var content = document.getElementById('contenido-archivo').value;
	uriContent = "data:application/octet-stream," + encodeURIComponent(content);
	
	var a = document.createElement("a");
	a.href = uriContent;
	a.download = 'NuevoArchivo.txt';
	a.dispatchEvent(new MouseEvent("click"));
}


/*function onLoad() {
	console.log("holap100");
	var result = reader.result;
	console.log(result);
}
function generarInfo() {
	console.log("holap89");

	//file = fopen(getScriptPath("/var/www/html/appT/data/S151000007.15101s02.10.20201205.teleton.0830"), 0);
	
	var hey = leerArchivo();
	console.log(hey);

	var cool = onLoadHandler();
	console.log(cool);
};

generarInfo()*/