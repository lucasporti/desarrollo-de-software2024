// 9. Desarrollar la función pow que recibe una base y un exponente y retorne la potencia.
function pow(base,exponente){
  var resultado = base;
  for(let i=1; i < exponente; i++){
    resultado *= base;
  }
  return resultado;
}
// console.log(pow(2,25))

// 10. Desarrollar una función que dado un número nos diga si es primo.

function esPrimo(numero){
  var contador = 0;
  var resultado;
  
  for(var i=1; i <= numero; i++){
    if(numero%i == 0){
      contador++;
    }
  }
  if(contador == 2) resultado = true;
  else resultado = false;
  
  return resultado;
}

// console.log(esPrimo(11))

// ------------------------------------------------------------------------------------------------------

// 12. Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué
// cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar
// para alcanzar dicho monto, dando prioridad a los billetes de mayor valor.

var billetes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function devolverCantidadDeBilletes(sumaDeDinero){
    
    var billetesAUsar = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var valorPlata = sumaDeDinero;
    var contador = 0;

    console.log("Devolver:")
    for(var i = 0; i < billetes.length; i++){

        while(valorPlata >= billetes[i]){
            
          valorPlata = valorPlata - billetes[i];
          contador += 1;

        }
        
        billetesAUsar[i] = contador;
        contador = 0;
        
        if(!(billetesAUsar[i] == 0))
        {
          if(billetesAUsar[i] > 1) console.log(billetesAUsar[i] + " billetes de " + billetes[i]);
          else console.log(billetesAUsar[i] + " billete de " + billetes[i]);
        }
    }
}
//devolverCantidadDeBilletes(48543)


var billetes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function devolverCantidadDeBilletes(sumaDeDinero){
    var cantidadBilletes = 0;
    var monto = sumaDeDinero;

    console.log("Devolver:")

    for(var i = 0; i < billetes.length; i++){

        while((monto%billetes[i]) == 0){
          monto = monto / billetes[i];
          cantidadBilletes++;
        }
        console.log(cantidadBilletes + " billetes de $" + billetes[i]);
    }
}
//devolverCantidadDeBilletes(25000)

// crear una funciòn que reciba un array como parametro y devuelva un nuevo array sin los elementos duplicados

function arraySinDuplicados(arr){
  var nuevoArray = [];

  nuevoArray.push(arr[0]);
  for(var i = 0; i < arr.length; i++){
    const seRepite = nuevoArray.includes(arr[i]);
    if(!seRepite){
      nuevoArray.push(arr[i]);
    }
  }
  return nuevoArray;
}

//console.log(arraySinDuplicados([1,3,5,6,7,9,1,3]))

function arraySinDuplicadosSinIncludes(arr){
  var nuevoArray = [];

  nuevoArray.push(arr[0]);
  for(var i = 0; i < arr.length; i++){
    const seRepite = nuevoArray.includes(arr[i]);
    if(!seRepite){
      nuevoArray.push(arr[i]);
    }
  }
  return nuevoArray;
}

// 1. crear una funciòn q reciba un string y devuelva el string invertido

function invertirString(arr){
  var arrayInvertido = [];
  var stringInvertido = "";

  for(var x = arr.length-1; x >=0; x--){
    arrayInvertido.push(arr[x]);
  }
  for(var i = 0; i < arrayInvertido.length; i++){
    stringInvertido += arrayInvertido[i];
  }

  return stringInvertido;
}
//console.log(invertirString("Hola"))



// 2. crear una funciòn que reciba un string y que cuente la cantidad de vocales que contiene

function contarVocales(string){
  var vocales = ["a", "e", "i", "o", "u"];
  var contadorVocales = 0;

  for(var i = 0; i < vocales.length; i++){
    var vocal = vocales[i];
    for(var x = 0; x < string.length; x++){
      if(string[x] == vocal) contadorVocales++;
    }
  }
  return contadorVocales;
}

// Funciòn que nos diga si una palabra es palindromo

function esPalindromo(palabra){
  var palabraInvertida = invertirString(palabra);
  if(palabraInvertida == palabra){
    return true;
  }else{
    return false;
  }
}
// console.log(esPalindromo(""))

function esPalindromo(palabra){
  var palabraInvertida = invertirString(palabra);
  return palabra == palabraInvertida;
}

// funciòn que dado un numero calcule el factorial 

function calcularFactorial(numero){
  var factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;    
  }
  return factorial;
}
// console.log(calcularFactorial(5))

// crear una funcion que reciba un array  y devuelva el numero que màs veces se repitio, 
// si existe colisiòn que devuelva cualquierda

function numeroMasRepetido(arr){
  var repite = 0;
  var mayorRepite = -99999;
  var dato;

  for(var i = 0; i < arr.length; i++){
    if(arr[i]==arr[i+1]){
      repite++;
    }else 
    {
      if(repite > mayorRepite){
      dato = arr[i];
      mayorRepite = repite;
    }
    repite = 1;
    }
    if(repite > mayorRepite){
      mayorRepite = repite;
      dato = arr[i];
    }
  }
  return
}

console.log(numeroMasRepetido([12,14,16,17,11,12,12]))


// crear una funcion que reciba una palabra y una letra y devuelva 
// la cantidad de veces que aparece esa letra