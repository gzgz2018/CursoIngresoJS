/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{ var num1;
  var num2;

  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;

  num1=parseInt(num1);
  num2=parseInt(num2);

  var suma;
  suma=num1+num2;
  alert("La suma es : "+suma);

	
}

function restar()
{ var num1;
  var num2;

  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;

  num1=parseInt(num1);
  num2=parseInt(num2);

  var resta;
  resta=num1-num2;
  alert("La resta es : "+resta);

	
}

function multiplicar()
{ var num1;
  var num2;

  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;

  num1=parseInt(num1);
  num2=parseInt(num2);

  var producto;
  producto=num1*num2;
  alert("El producto es : "+producto);

	
}

function dividir()
{ var num1;
  var num2;

  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;

  num1=parseInt(num1);
  num2=parseInt(num2);

  var division;
  division=num1/num2;
  alert("La division es : "+division);

	
}










