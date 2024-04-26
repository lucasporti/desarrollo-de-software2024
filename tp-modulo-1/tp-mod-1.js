// 1. Convertir una cadena de texto a formato de título:
function convertirStringATitulo(str) {
  var contador = 1;
  var nuevoString = "";

  nuevoString += str[0].toUpperCase();

  while(contador < str.length){
    if(str[contador] == " "){
      nuevoString += " ";
      nuevoString += str[contador+1].toUpperCase();
      contador++;
    }else{
      nuevoString += str[contador];    
    }

    contador++;
  }
  return nuevoString;
}

// console.log(convertirStringATitulo("mi amigo me invito a comer"));

// 2. Concatenar elementos de un array con un separador personalizado:
function concatenarArrayConSeparadorPersonalizado(arrStr, separador){
  var nuevoString = "";
  for(var i = 0; i < arrStr.length; i++){
    nuevoString += arrStr[i];
    if(i != arrStr.length - 1){
      nuevoString += separador;
    }
  }
  return nuevoString;
}

//console.log(concatenarArrayConSeparadorPersonalizado(["Hola", "Mundo", "JavaScript"], "-"))

// 3. Revertir las palabras de una frase:

function invertirString(str){

  var arrString = [];

  var palabra = "";
  for(var i = 0; i < str.length; i++){
  
    if(str[i] == " "){
      arrString.push(palabra);
      palabra = "";
    }else {
      palabra += str[i];
    }
  }

  if(palabra != ""){
    arrString.push(palabra);
  }

  var nuevoString = "";

  for (var i = arrString.length - 1; i >= 0; i--){
    nuevoString += arrString[i];
    nuevoString += " "
  }
  return nuevoString

}

// console.log(invertirString("JavaScript es divertido"))

// 4. Contar la cantidad de veces que aparece una palabra en una cadena:
function contarPalabra(str, palabra){

  var contador = 0;
  var contadorPalabra = 0;

  while (contador < str.length) {
    var palabraActual = "";

    while (contador < str.length && str[contador] !== " ") {
      palabraActual += str[contador];
      contador++;
    }

    if (palabraActual.toLowerCase() === palabra.toLowerCase()) {
      contadorPalabra++;
    }

    contador++;
  }

  return contadorPalabra;
}

// console.log(contarPalabra("El sol brilla y el cielo está despejado.", "el"))

// 5. Comprobar si una cadena de texto termina con un determinado sufijo:

function terminaConSufijo(str, sufijo) {
  if (str.length < sufijo.length) {
    return false;
  }

  let sufijoI = sufijo.length - 1;
  let strI = str.length - 1;

  while (sufijoI >= 0) {
    if (str[strI] !== sufijo[sufijoI]) {
      return false;
    }
    sufijoI--;
    strI--;
  }

  return true;
}

// 6. Eliminar los espacios en blanco al inicio y final de una cadena:

function eliminarEspacios(str) {
  var inicio = 0;
  var fin = str.length - 1;

  while (str[inicio] === ' ' && inicio < fin) {
    inicio++;
  }

  while (str[fin] === ' ' && fin >= inicio) {
    fin--;
  }

  var nuevoString = '';

  for (let i = inicio; i <= fin; i++) {
    nuevoString += str[i];
  }

  return nuevoString;
}

// console.log(eliminarEspacios("      JavaScript es divertido         "));

// 7.  Extraer el dominio de una dirección de correo electrónico:

function extraerDominio(email) {
  var contador = 0;
  while (email[contador] != "@"){
    contador++;
  }

  var dominio = ""
  for(var i = contador + 1; i < email.length; i++){
    dominio += email[i];
  }
  
  return dominio;
  
}

// console.log(extraerDominio("jhondoe@ahk.com.ar"))

// 8. Combinar dos arrays alternando sus elementos:

function combinarArrays(arr1, arr2) {
  var resultado = [];
  var longitud;

  if(arr1.length > arr2.length){
    longitud = arr1.length;
  }else{
    longitud = arr2.length;
  }

  for (var i = 0; i < longitud; i++) {
    if (i < arr1.length) {
      resultado.push(arr1[i]);
    }
    if (i < arr2.length) {
      resultado.push(arr2[i]);
    }
  }

  return resultado;
}

// console.log(combinarArrays([1, 2, 3], ['a', 'b', 'c', 'd']))

// 9. Calcular impuestos

function calcularImpuestos(edad, ingresos) {
  if (edad < 18) {
    return 0;
  } else if (edad >= 18 && edad <= 20) {
    return ingresos * 0.10;
  } else if (edad >= 21 && edad <= 30) {
    return ingresos * 0.15;
  } else {
    return ingresos * 0.40;
  }
}

// console.log(calcularImpuestos(18, 1000))

// 10. Resumen de cantidad de likes:

function resumenLikes(likes) {
  if (likes >= 1000000) {
    return (likes / 1000000).toFixed(1) + 'M';
  } else if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + 'K'; //
  } else {
    return likes;
  }
}

// Ejemplos de uso
// console.log(resumenLikes(1400)); // Salida: "1.4K"
// console.log(resumenLikes(34567)); // Salida: "34.6K"
// console.log(resumenLikes(1000000)); // Salida: "1.0M"
// console.log(resumenLikes(12345678)); // Salida: "12.3M"


