	var resultado;//variable que guarda todos los textos
	
	var guardados = [];//array que guarda todos los nombres de los archivos ya guardados
	var response = localStorage.getItem("guardados"); //recuperar lo de guardados
	if( response != null){
		guardados = JSON.parse(response);
	}
	
	var tama;//var que guarda el tamaño de guardados para evitar ciclos infinitos
	var fileName;// nombre del archivo a leer
	
	localStorage.clear() // quitar lo guardado en local storage

	let found = []//variable para separar el string con los enter
	let datos = []
	let idx = 0//var que rota cada consulta
	
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
	fileName = e.target.files[0].name; // leer nombre del archivo a guardar
	//console.log("el nombre del archivo es: ");
	//console.log(fileName);
	tama = guardados.length;//como el for incrementa guardados.length,lo ponemos en tama
	for (var i=0; i<=tama; i++){//mirar si el nombre del archivo está guardado en el array de guardados
		if(guardados[i] == fileName){ return; }
	}		
	for (var i=0; i<=tama; i++){//sino está ya, guardar el nombre del archivo a leer
		guardados.push(fileName);	
		localStorage.setItem("guardados", JSON.stringify(guardados));
	}
	
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
	  if( resultado == null) {resultado = contenido;}
	  else {resultado = resultado + contenido;}
      mostrarContenido(resultado);
	  //console.log(typeof resultado);
      clasificator();
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
	
	var a = document.createElement("a");
	a.href = uriContent;
	a.download = 'NuevoArchivo.txt';
	a.dispatchEvent(new MouseEvent("click"));
}

function clasificator(){
	const regex = /^.*/gm
	found = resultado.match(regex)	
	//console.log("found es ",found)
	datos = found.filter((value) => value != "")//quitar todo lo vacío del array
	//console.log("datos es ",datos)
}

function showVar(){
	if(datos.length == 0){
		console.log('no se ha elegido un archivo')		
	}
	else{
	let fecha =  datos[idx].slice(0, 8)
	console.log('La fecha es ')
	console.log(fecha)
	let hora = datos[idx].slice(8, 12)
	console.log('La hora es ')
	console.log(hora)
	let descripcion = datos[idx].slice(47)
	console.log('La descripcion es ')
	console.log(descripcion)
	//idx = idx+2;
	idx++
	}
}
