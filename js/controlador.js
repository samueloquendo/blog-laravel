var arreglo=['imagenes/1.jpg','imagenes/2.jpg','imagenes/3.jpg','imagenes/4.jpg'];
var contador=0;
window.onload=function () {

var derecho=document.getElementById('derecho');
var izquierdo=document.getElementById('izquierdo');

derecho.addEventListener('click',mover_derecha);
izquierdo.addEventListener('click',mover_izquierda);

function mover_derecha() {
	var imagen=document.getElementById('ima');
	contador++;
	if (contador>=arreglo.length){
		contador=0;
	}
	imagen.src=arreglo[contador];
}
function mover_izquierda() {
	var imagen=document.getElementById('ima');
	contador--;
	if (contador<0){
		contador=arreglo.length-1;
	}
	imagen.src=arreglo[contador];
}
}