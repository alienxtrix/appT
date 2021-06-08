	var resultado;//variable que guarda todos los textos
	var guardados = [];//array que guarda todos los nombres de los archivos ya guardados
	var tama;//var que guarda el tamaño de guardados para evitar ciclos infinitos
	var fileName;// nombre del archivo a leer
	
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
		guardados.push(e.target.files[0].name);	
	}
	
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
	  if( resultado == null) {resultado = contenido;}
	  else {resultado = resultado + contenido;}
      mostrarContenido(resultado);
    };
    lector.readAsText(archivo); 
}
  
function mostrarContenido(resultado) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = resultado;
}
  
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
	
function savefile(){
	var content = document.getElementById('contenido-archivo').value;
	uriContent = "data:application/octet-stream," + encodeURIComponent(content);
	document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"NuevoArchivo.txt\">Click acá para guardar el archivo</a>";
	alert("Haga clic en el link azul para guaradr el archivo");
}