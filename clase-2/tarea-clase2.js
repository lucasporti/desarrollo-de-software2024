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

