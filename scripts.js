	var resultado;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
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