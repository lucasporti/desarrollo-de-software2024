export class Cursada {
    alumno;
    curso;
    calificaciones; 

    constructor(alumno, curso){
        this.alumno = alumno;
        this.curso = curso;
        this.calificaciones = [];
    }

    agregarCalificacion(unaCalificacion){
        this.calificaciones.push(unaCalificacion);
    }

    promedio() {
        const cantCalificaciones = this.calificaciones.length;
        let sumaDeCalificaciones = 0;
        for(let i = 0; i < cantCalificaciones; i++){
            sumaDeCalificaciones += this.calificaciones[i].nota;
        }

        return sumaDeCalificaciones/cantCalificaciones;
    }

    fueAprobada(){
        /* let aprobado = false;
        for(let i = 0; i < this.calificaciones.length; i++){
            if(this.calificaciones[i].nota >= 6) {
                aprobado = true;
                break;
            }
        }
        return aprobado; */
        return this.calificaciones.some(c => c.nota >= 6);
    }
};