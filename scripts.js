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
	console.log("el nombre del archivo es: ");
	console.log(fileName);
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
			resultado = resultado + contenido;
		}

		

		mostrarContenido(resultado);
		mostrarHome(resultado);
	};

    lector.readAsText(archivo); 
}

function mostrarHome(resultado) {
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