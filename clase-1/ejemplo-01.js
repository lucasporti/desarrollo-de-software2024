let miSaludo;
miSaludo = "Hola mundo!";
var otroSaludo = "Hola mundo 2!";

console.log(`${typeof miSaludo}`);
console.log(`${typeof otroSaludo}`);

miSaludo = "Lucas";
console.log(`Hola ${typeof miSaludo}`);

miSaludo = 2;
console.log(`${typeof miSaludo}`);

var urNumero = 2;
var otroNumero = 4;
//var resultado = urNumero + otroNumero;

// console.log(resultado);

var edadDeJuana = 18;
var esMayorDeEdad = edadDeJuana >= 18;

console.log(esMayorDeEdad, typeof(esMayorDeEdad));

var signoDeJuana = "piscis";
var esDePiscis = signoDeJuana == "piscis";

var esPiscianaMayor = esMayorDeEdad && esDePiscis;

console.log(esPiscianaMayor, typeof(esPiscianaMayor));
/*let nota1 = 5;
let nota2 = 6;

let resultado = nota1 >= 6 && nota2 >=6;

console.log(resultado ? "aprobo" : "no aprobo");
*/

var notaMin = 6;
var notaParcial1 = 3;
var notaRecuperatorio1 = 7;
var notaParcial2 = 6;
var notaRecuperatorio2;

var aproboInstancia1 = notaParcial1 >= notaMin || notaRecuperatorio1 >= notaMin;
var aproboInstancia2 = notaParcial2 >= notaMin || notaRecuperatorio2 >= notaMin;

var aproboCursada = aproboInstancia1 && aproboInstancia2;

console.log(aproboCursada ? "Felicitaciones estás aprobado!" : "Lamentablemente no estás aprobado.");


function esMultiplo(numero1, numero2) {
  if (numero1 % numero2 == 0 || numero2 % numero1 == 0) {
    console.log("Son multiplos");
  } else {
    console.log("No son multiplos");
  }
}

// Se ingresa un número con el formato YYYYMMDD. A partir de ese número mostrar el año (YYYY), el mes (MM) y el día(DD).

function obtenerFecha(yyyyMMdd) {
  var anio = yyyyMMdd - (yyyyMMdd % 10000);
  var mes = (yyyyMMdd % 10000 - yyyyMMdd % 100) / 100;
  var dia = yyyyMMdd % 100;

  console.log("Año: " + anio);
  console.log("Mes: " + mes);
  console.log("Dia: " + dia);
}

var fecha = 20240308;

obtenerFecha(fecha);