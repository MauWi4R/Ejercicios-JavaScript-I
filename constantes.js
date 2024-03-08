// Definir la variable web y asignarle valor
var web="https://www.google.com";
// Definir una constante llamada ip
const ip="192.168.1.100";
// Impresion en el documento HTML
document.getElementById("mensaje2").innerHTML = web+" "+ip;
// Imprimir en cosola
console.log(web+' '+ip);
// mensaje en consola para cambio de valor
console.log("****** Cambio de valor******");
web="https://www.facebok.com";
ip="10.10.1.100";
console.log(web+' '+ip); // ¿Qué sucedera? se detiene porque no se puede "inicializar nuevamente una constante",