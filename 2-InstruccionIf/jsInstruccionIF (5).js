function Mostrar()
{
    //  Al ingresar una edad solo debemos informar si la persona NO es adolescente.
    //
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
  if (edad<13 || edad>17)
{
alert("No es adolescente");
}
}//FIN DE LA FUNCIÓN
// también se puede reutilizarla lógica del ejercicio nº 4 y negarlo
//Ejemplo : if (!(edad>=13 && edad<=17))
            //{
//             alert("No es adolescente");
            //}
//

