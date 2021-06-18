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
		console.log(resultado);

		var filas = lector.result.split("\n");
		console.log(filas);
    for(var i in filas) {
       var columnas = filas[i].split(",");
       console.log(columnas);

	   medio = columnas[0].substring(12,13);
	   console.log(medio);
	   importe = columnas[0].substring(33,45);
	   console.log(importe);
		//impo = importe.slice(length-1)+"."
		switch (medio) {
			case '1':
				document.getElementById("impoSucursal").innerHTML = "$"+importe;
				break;
			case '2':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '3':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '4':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '5':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '6':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '7':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '8':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			case '9':
				//document.getElementById("cantSucursal").innerHTML = "$"+medio;
				break;
			default:
				break;
		}
		
    }

		//console.log(resultado);

		/*char[] aCaracteres;
		char[] aCaracteres = resultado.toCharArray();*/

		//str = resultado.split('');
		//str = Array.from(resultado);
		//str = Array(resultado);
		//str = [resultado];
		
		//console.log(str);
		
		/*for(resultado){

		}*/
		/*fecha = resultado.substring(0, 8);
		hora = resultado.substring(8, 12);
		medio = resultado.substring(12, 13);
		console.log(fecha);
		console.log(hora);
		console.log(medio);*/
      	
		mostrarContenido(resultado);
    };
    lector.readAsText(archivo); 

	/*var men = 'holahola';
	return men;*/
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