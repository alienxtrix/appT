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

		/*var filas = lector.result.split("\n");

		var totalSucursal = 0;
		var totalCodiOtBan = 0;
		var totalBnet = 0;
		var totalCat = 0;
		var totalBoteo = 0;
		var totalAlcancias = 0;
		var totalCodiCiti = 0;

		for(var i in filas) {
			var columnas = filas[i].split(",");
			var medio    = columnas[0].substring(12,13);
			var importe  = columnas[0].substring(33,45);
			var impo     = importe.substring(0, 10) + "." + importe.substring(10, importe.length);

			//num = parseFloat(impo).toFixed(2);
			//num = Number(impo);

			switch (medio) {
				case '1':
					console.log(impo);
					totalSucursal += parseFloat(impo);
					console.log(totalSucursal);
					document.getElementById("impoSucursal").innerHTML = "$"+totalSucursal.toFixed(2);
					break;
				case '2':
					totalCat += parseFloat(impo);
					//console.log(totalCat);
					document.getElementById("impoCat").innerHTML = "$"+totalCat.toFixed(2);
					break;
				case '3':
					break;
				case '4':
					totalBnet += parseFloat(impo);
					//console.log(totalBnet);
					document.getElementById("impoBnet").innerHTML = "$"+totalBnet;
					break;
				case '5':
					break;
				case '6':
					totalBoteo += parseFloat(impo);
					//console.log(totalBoteo);
					document.getElementById("impoBoteo").innerHTML = "$"+totalBoteo.toFixed(2);
					break;
				case '7':
					totalAlcancias += parseFloat(impo);
					//console.log(totalAlcancias);
					document.getElementById("impoAlcancias").innerHTML = "$"+totalAlcancias.toFixed(2);
					break;
				case '8':
					totalCodiOtBan += parseFloat(impo);
					//console.log(totalCodiOtBan);
					document.getElementById("impoCodiOtBan").innerHTML = "$"+totalCodiOtBan;
					break;
				case '9':
					totalCodiCiti += parseFloat(impo);
					//console.log(totalCodiCiti);
					document.getElementById("impoCodiCiti").innerHTML = "$"+totalCodiCiti;
					break;
				default:
					break;
			}
		}*/

		mostrarContenido(resultado);
		mostrarHome(resultado);
	};

    lector.readAsText(archivo); 
}

function mostrarHome(resultado) {
	var filas = resultado.split("\n");

	var totalSucursal = 0;
	var totalCodiOtBan = 0;
	var totalBnet = 0;
	var totalCat = 0;
	var totalBoteo = 0;
	var totalAlcancias = 0;
	var totalCodiCiti = 0;

	for(var i in filas) {
		var columnas = filas[i].split(",");
		var medio    = columnas[0].substring(12,13);
		var importe  = columnas[0].substring(33,45);
		var impo     = importe.substring(0, 10) + "." + importe.substring(10, importe.length);

		//num = parseFloat(impo).toFixed(2);
		//num = Number(impo);

		switch (medio) {
			case '1':
				totalSucursal += parseFloat(impo);
				document.getElementById("impoSucursal").innerHTML = "$"+totalSucursal.toFixed(2);
				break;
			case '2':
				totalCat += parseFloat(impo);
				document.getElementById("impoCat").innerHTML = "$"+totalCat.toFixed(2);
				break;
			case '3':
				break;
			case '4':
				totalBnet += parseFloat(impo);
				document.getElementById("impoBnet").innerHTML = "$"+totalBnet.toFixed(2);
				break;
			case '5':
				break;
			case '6':
				totalBoteo += parseFloat(impo);
				document.getElementById("impoBoteo").innerHTML = "$"+totalBoteo.toFixed(2);
				break;
			case '7':
				totalAlcancias += parseFloat(impo);
				document.getElementById("impoAlcancias").innerHTML = "$"+totalAlcancias.toFixed(2);
				break;
			case '8':
				totalCodiOtBan += parseFloat(impo);
				document.getElementById("impoCodiOtBan").innerHTML = "$"+totalCodiOtBan.toFixed(2);
				break;
			case '9':
				totalCodiCiti += parseFloat(impo);
				document.getElementById("impoCodiCiti").innerHTML = "$"+totalCodiCiti.toFixed(2);
				break;
			default:
				break;
		}
	}
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