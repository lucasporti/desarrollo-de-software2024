export class Curso{
    nombre;
    nombreDocente;
    materia;
    cursadasDeAlumnos = [];

    agregarAlumnoAlCurso(unAlumno){
        this.cursadasDeAlumnos.push(unAlumno);
    }

    promedioDeEdadesDeAlumnos() {
        let sumaEdades = 0;
        const cantidadDeAlumnos = this.cursadasDeAlumnos.length;
        for(let i = 0; i < cantidadDeAlumnos; i++){
            sumaEdades += this.cursadasDeAlumnos[i].alumno.dameTuEdad();
        }
        return sumaEdades/cantidadDeAlumnos;
    }

    algunAlumnoViveCercaDeOtro(){
        let viveCerca = false;
        let i = 0
        while(!viveCerca && i < this.cursadasDeAlumnos.length){
            const alumnoActual = this.cursadasDeAlumnos[i].alumno;
            let j = i + 1;
            while(j < this.cursadasDeAlumnos.length && !viveCerca){
                const otroAlumno = this.cursadasDeAlumnos[j].alumno;
                viveCerca = alumnoActual.vivisCercaDe(otroAlumno);
                j++;
            }
            i++;
        }       
        return viveCerca; 
    }
    cursoJoven(){
        
        return this.promedioDeEdadesDeAlumnos() < 22;
    }

    promedioGeneral(){
        let suma = 0;
        for(let i = 0; i < this.cursadasDeAlumnos.length; i++){
            suma += this.cursadasDeAlumnos[i].promedio();
        }
        return suma/this.cursadasDeAlumnos.length;
    }

    // de un curso si tuvo buen desempeño: si su promedio general fue mayor o igual a 7
    buenDesempenio() {
        return this.promedioGeneral() >= 7;
    }
    
    // Me interesa saber si en un curso todos los alumnos aprobaron la cursada
    todosAprobaronLaCursada(){
        return this.cursadasDeAlumnos.every(c => c.fueAprobada);
    }

}