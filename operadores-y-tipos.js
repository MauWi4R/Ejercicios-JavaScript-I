// Variables numéricas
var numero1=7, numero2=15;
var suma, resta, multiplicacion, division;

// Operaciones
suma=numero1+numero2;
resta=numero1-numero2;
multiplicacion=numero1*numero2;
division=numero1/numero2;

// Mostrar los resultados em una alerta
alert("El resultado de la suma es: "+ suma + "\nEl resuñtado de la resta es: "+ resta +"\nEl resultado de la multiplicación es: "+ multiplicacion + "\nEl resultado de la divisió es: "+ division);

// Definición de nuevas variables
var numero_entero=24, cadena_texto="Hola 'que' tal", verdadero_o_falso=true, numero_falso="33";
var sumaV=numero_entero+numero_falso;
console.log(sumaV);
numero_falso=parseInt(numero_falso); // Convertir de cadena o string a número
sumaV=numero_entero+numero_falso;
console.log(sumaV);
numero_entero=numero_entero.toString()+9;
console.log(numero_entero);
console.log("tipo de datos de numero_entero es: "+ typeof numero_entero);
console.log("tipo de datos de cadena_texto es: "+ typeof cadena_texto);
console.log("tipo de datos de verdero_o_falso es: "+ typeof verdadero_o_falso);
console.log("tipo de datos de numero_falso es: "+ typeof numero_falso);