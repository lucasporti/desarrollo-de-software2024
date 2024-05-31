export class Calificacion {
    nota;
    descripcion;
    nroInstanciaEvaluacion;
    
    constructor(nota, nroInstanciaEvaluacion){
        this.nota = nota;
        this.nroInstanciaEvaluacion = nroInstanciaEvaluacion;
    }

    sosDePrimeraInstancia() {
        return this.nroInstanciaEvaluacion == 1;
    }

    notaMayorOIgualA(unNumero){
        return this.nota >= unNumero;
    }
}

// intentar no invadir los atributos de otra clase
// no llamar desde otra clase a nroInstanciaEvaluacion
// llamar al método sosDePrimeraInstancia que lo utiliza
