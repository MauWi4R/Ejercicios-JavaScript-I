// Mensaje de Hola mundo y bienvenida
alert('Hola mundo desde JS');
alert("Bienvenido al curso");

// Imprimir mensaje desde un archivo externo de JS al documento HTML
document.getElementById('mensaje1').innerHTML = "¡Hola mundo, desde un archivo externo!";

//Para imprimir en consola hacemos uso de console.log
console.log("Muestra esto en consola");

// Variables en JS, estas se pueden crear sin inicializar o tambien asignandoles un valor
var numero1, numero2, numero3; // Estas variables sin inicializar
var num1=5, num2=7, num3=8; // Estas variables están inicializadas
var nombrePropio="Alondra", apellidoPaterno="Mora"; // Las varibles por lo general deben de hacer sentido al valor que alojaran
var NombrePropio, nombre_propio, nOmbrePropio, nombrePRopio; // Son sensibles a mayúsculas y minúsculas

// Operación de suma de variables
console.log(num1+num2);

// Variable de país y continente unidas por el simbolo de +
var pais="México", continente="América";
console.log(pais);
console.log(continente);
console.log(pais+" "+continente);

//enviando alertas
var pais_continente=pais+" "+continente;
alert(pais_continente);