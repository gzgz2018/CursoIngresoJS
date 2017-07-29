/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo;
    var importe;
    importe=parseInt(document.getElementById("importe").value);
    resultado=importe*0.75;

    document.getElementById("resultado").value=resultado;//muestro el descuento pot ID
}
