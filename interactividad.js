function limpiarFormulario(){
	document.getElementById('miForm').reset();
}

var com = function (n1, n2, n3){
	var numero1 = parseInt(document.getElementById("numero1").value);

	var numero2 = parseInt(document.getElementById("numero2").value);

	var numero3 = parseInt(document.getElementById("numero3").value);

	if (numero1 < numero2 && numero1 < numero3) {
 					alert("El primer numero es mas pequeño");

				}else if (numero2 < numero1 && numero2 < numero3) {
					alert("El segundo numero es mas pequeño");
				}else if (numero3<numero1 && numero3 < numero2) {
					alert("El tercer numero es mas pequeño");
				}else{
					alert("No cumple ninguna de la condición");
				}          

}

function limpiarFormulario(){
	document.getElementById('miForm').reset();
}
var pulg= function(cm){
	var cm = parseFloat(document.getElementById("cm").value);
	var result = cm/2.54;
	alert("en pulgadas es: " + result);
	return result;
}

function limpiarFormulario(){
	document.getElementById('miForm').reset();
}

var yard= function(m){
	var m = parseFloat(document.getElementById("m").value);
	var result = m*1.094;
	alert("en yardas es: " + result);
	return result;
}