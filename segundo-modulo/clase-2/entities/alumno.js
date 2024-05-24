export class Alumno {
    legajo;
    fechaDeNacimiento;
    notas = [];

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Nomenclatura para escribir métodos en una clase
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    saludar(){
        console.log("Hola soy " + this.nombreCompleto());
    }

    saludarA(nombrePersona){
        console.log("Hola " + nombrePersona + ", soy " + this.nombreCompleto());
    }

    saludarAlumno(alumno){
        console.log("Hola " + alumno.nombreCompleto() + ", soy " + this.nombreCompleto());
    }

    dameTuEdad(fechaDeNacimiento){
        const date = new Date();
        // TODO
        return 20;
    }
    //TODO
    vivisCercaDe(otroAlumno){
        let cerca = false;
        if(this.posicion.distanciaHasta(otroAlumno) < 20) cerca = true;
        return cerca;
    }

    promedioAlumno(){
        let promedio, suma = 0;
        for(let i = 0; i < this.notas.length; i++){
            suma += this.notas[i];
        }
        promedio = suma/this.notas.length;
        return promedio;
    }
};