// --------------------------------------------------------------------------- //
// 1. Dados 10 valores numéricos, informar cual es el mayor de ellos por pantalla


function mayorDeDosNumeros(){
    var primerNumero = prompt("Ingrese un numero");
    var segundoNumero = prompt("Ingrese otro numero");
    
    if(primerNumero >= segundoNumero){
        return primerNumero;
    } 
    else return segundoNumero;
}

function mayorDeDosNumerosMejorada(){
    const primerNumero = prompt("Ingrese un numero");
    const segundoNumero = prompt("Ingrese otro numero");
    
    var numeroMayor;
    
    if(primerNumero >= segundoNumero){
        numeroMayor = primerNumero;
    } 
    else numeroMayor = segundoNumero;
    
    return numeroMayor;
}

mayorDeDosNumeros()


function mayorDeDiezNumerosPedidosAlUsuario(){
    var mayorNumero = -999999;

    for(var i = 0; i < 10; i++){
        const numeroIngresado = prompt("Ingrese un número");

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }

    return mayorNumero;
}

function mayorDeLosNumerosPedidosAlUsuario(){
    const cantNumerosAIngresar = prompt("Indique la cant de numeros a comparar");
    var mayorNumero = -999999;

    for(var i = 0; i < 10; i++){
        const numeroIngresado = prompt("Ingrese un número");

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }

    return mayorNumero;
}

const conjuntoDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mayorDelConjuntoDeNumero(numero1, numero2, numero3){
    var mayorNumero = -999999;

    for(var i = 0; i < 10; i++){
        const numeroIngresado = prompt("Ingrese un número");

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }

    return mayorNumero;
}

function mayorDelConjuntoHastaPrimerNegativo(numeros){
    var mayorNumero = -999999;
    var i = 0;

    while(i < numeros.length && numeros[i] >= 0){
        const numeroDeLaPosicion = numeros[i];

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
        i++;
    }
    return mayorNumero;
}

// ejercicio 2
// Dados 50 números enteros, informar el promedio de los mayores que 100 y la suma de los menores que –10 por pantalla.
function promedioYSumaDeNumerosEnteros(numeros){
    var numeroPromedio = 100;
    var numeroMenor = -10;

    var sumaMayorDe = 0;
    var sumaMenorDe = 0;
    var contador = 0;
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] >= numeroPromedio){
            contador++; 
            sumaMayorDe += numeros[i];
        }

        if(numeros[i] < numeroMenor){
            sumaMenorDe += numeros[i];
        }
    }
    var promedio = sumaMayorDe/contador;
    console.log("El promedio de los mayores a " + numeroPromedio + " es: " + promedio);
    console.log("La suma de los menores a " + numeroMenor + " es: " + sumaMenorDe);

}

function promedioYSumaDeNumerosEnteros(numeros, numeroPromedio, numeroMenor){
    var sumaMayorDe = 0;
    var sumaMenorDe = 0;
    var contador = 0;
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] >= numeroPromedio){
            contador++; 
            sumaMayorDe += numeros[i];
        }

        if(numeros[i] < numeroMenor){
            sumaMenorDe += numeros[i];
        }
    }
    var promedio = sumaMayorDe/contador;
    console.log("El promedio de los mayores a " + numeroPromedio + " es: " + promedio);
    console.log("La suma de los menores a " + numeroMenor + " es: " + sumaMenorDe);

}

// 4. Dado un valor numérico entero m, determinar e imprimir un listado
// con los m primeros múltiplos de 3 que no sean múltiplos de 5.

function imprimirMultiplosDe3SinMultiplosDe5(numero){
    var i = 1;
    var contador = 0;

    while(contador < numero){
        if(i%3 == 0 && !(i%5 == 0)){
            console.log(i)
            contador++;
        }
        i++;
    }
}

// Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué cantidades de billetes
// de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar para alcanzar dicho monto, dando prioridad 
// a los billetes de mayor valor.

var billetes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function devolverCantidadDeBilletes(sumaDeDinero){
    
    var valorPlata = sumaDeDinero;
    var contador = 0;
    var billetesAUsar = billetes;

    for(var i = 0; i < billetes.length; i++){
        console.log(i);
        while(valorPlata > billetes[i]){
            valorPlata = valorPlata - billetes[i];
            contador += 1;
            
            console.log(valorPlata);
        }

        billetesAUsar[i] = contador;
        
        contador = 0;
    }

}

// hacer ejercicio 9, 10, 12, 13, ¿15?