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
    // polimorfismo -> 2 o más objetos son polimorficos para un tercero si este los utiliza
    // de forma indistinta
    fueAprobada(){
        return this.curso.materia.estaAprobada(this.calificaciones);
    }
    fuePromocionada(){
        return this.curso.materia.fuePromocionada(this.calificaciones);
    }
};

// .some -> OR 
// .every -> AND

// quiero saber si la cursada fue aprobada o fue promocionada
// que sea aprobada o promocionada depende de la materia
// existen materias que son promocionables y otras que no
// para poder promocionar una materia, las notas obtenidas en las 
// calificaciones de primera instancia deben ser iguales o superiores
// a 8
// para que la cursada este aprobada, se necesita que al menos haya
// 2 calificaciones con nota superior o igual a 6