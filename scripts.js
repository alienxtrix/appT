	var resultado;//variable que guarda todos los textos
	
	var guardados = [];//array que guarda todos los nombres de los archivos ya guardados
	var response = localStorage.getItem("guardados"); //recuperar lo de guardados
	if( response != null){
		guardados = JSON.parse(response);
	}
	
	var tama;//var que guarda el tamaño de guardados para evitar ciclos infinitos
	var fileName;// nombre del archivo a leer
	
	localStorage.clear() // quitar lo guardado en local storage
	
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

		//separar en variables
		let arr = []
		let fecha = []//arr para guardar la fecha
		let hora = []//arr para guardar la hora
		let tipo = []
		let pago = []
		let sucursal = []
		let tarjeta = []
		let cuenta = []
		let importe = []
		let estado = []
		let referencia = []
		arr = resultado.split("");//partir el resultado en un array
		for(let i=0; i<8; i++){
			fecha.push(arr[i])
		}
		console.log('La fecha es ')
		console.log(fecha)	
		//
		for(let i=8; i<12; i++){
			hora.push(arr[i])
		}
		console.log('La hora es ')
		console.log(hora)	
		//
		for(let i=12; i<13; i++){
			tipo.push(arr[i])
		}
		console.log('El tipo es ')
		console.log(tipo)
		//	
		for(let i=13; i<14; i++){
			pago.push(arr[i])
		}
		console.log('El pago es ')
		console.log(pago)
		//
		for(let i=14; i<18; i++){
			sucursal.push(arr[i])
		}
		console.log('La sucursal es ')
		console.log(sucursal)	
		//
		for(let i=18; i<21; i++){
			tarjeta.push(arr[i])
		}
		console.log('La tarjeta es ')
		console.log(tarjeta)
		//
		for(let i=21; i<33; i++){
			cuenta.push(arr[i])
		}
		console.log('La cuenta es ')
		console.log(cuenta)
		//
		for(let i=33; i<45; i++){
			importe.push(arr[i])
		}
		console.log('El importe es ')
		console.log(importe)
		//
		for(let i=45; i<47; i++){
			estado.push(arr[i])
		}
		console.log('El estado es ')
		console.log(estado)	
		//
		for(let i=77; i<90; i++){
			referencia.push(arr[i])
		}
		console.log('La referencia es ')
		console.log(referencia)				

}

