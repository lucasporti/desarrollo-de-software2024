import { Curso } from "../entities/curso";
import { Alumno } from "../entities/alumno";
import { Cursada } from "../entities/cursada";
import { Calificacion } from "../entities/calificacion";

// testear promedioFueBueno
test("Calculamos si el promedio de los estudiantes fue bueno y nos da false", () => {
    // Configuramos los datos de prueba
    
    // instancia del curso
    const curso = new Curso();
    curso.materia = "Desarrollo De Software I";

    // instancia de alumno
    const alumno1 = new Alumno("Roberto", "Perez");
    
    // instancia de calificación 1 y asignación de atributo nota
    const calificacion1 = new Calificacion();
    calificacion1.nota = 5;
    
    // instancia de calificación 2 y asignación de atributo nota
    const calificacion2 = new Calificacion();
    calificacion2.nota = 3;

    // instancia de la cursada y asignación del primer alumno
    const cursada = new Cursada(alumno1, curso);
    cursada.agregarCalificacion(calificacion1);
    cursada.agregarCalificacion(calificacion2);

    // instancia de alumno Sofía
    const alumno2 = new Alumno("Sofia", "Gomez");

    // instancia de calificación 1 y asignación de atributo nota
    calificacion1.nota = 2;
    
    // instancia de calificación 2 y asignación de atributo nota
    calificacion2.nota = 5;

    // instancia de la segunda cursada y asignación del segundo alumno
    const cursada2 = new Cursada(alumno2, curso);
    cursada2.agregarCalificacion(calificacion1);
    cursada2.agregarCalificacion(calificacion2);

    // Agregamos los alumnos a la instancia del curso
    curso.agregarAlumnoAlCurso(cursada);
    curso.agregarAlumnoAlCurso(cursada2);

     // Ejecutamos el método que queremos testear  y guardamos su resultado
    const promedioBueno = curso.buenDesempenio();
    
    // Creamos el valor conocido / esperado
    const promedioBuenoEsperado = false;
    
    // Aserción
    expect(promedioBueno).toBe(promedioBuenoEsperado);
})

// testear promedioFueBueno
test("Calculamos si el promedio de los estudiantes fue bueno y nos da true", () => {
    // Configuramos los datos de prueba
    
    // instancia del curso
    const curso = new Curso();
    curso.materia = "Desarrollo De Software I";

    // instancia de alumno
    const alumno1 = new Alumno("Roberto", "Perez");
    
    // instancia de calificación 1 y asignación de atributo nota
    const calificacion1 = new Calificacion();
    calificacion1.nota = 10;
    
    // instancia de calificación 2 y asignación de atributo nota
    const calificacion2 = new Calificacion();
    calificacion2.nota = 10;

    // instancia de la cursada y asignación del primer alumno
    const cursada = new Cursada(alumno1, curso);
    cursada.agregarCalificacion(calificacion1);
    cursada.agregarCalificacion(calificacion2);

    // instancia de alumno Sofía
    const alumno2 = new Alumno("Sofia", "Gomez");

    // instancia de calificación 1 y asignación de atributo nota
    calificacion1.nota = 10;
    
    // instancia de calificación 2 y asignación de atributo nota
    calificacion2.nota = 10;

    // instancia de la segunda cursada y asignación del segundo alumno
    const cursada2 = new Cursada(alumno2, curso);
    cursada2.agregarCalificacion(calificacion1);
    cursada2.agregarCalificacion(calificacion2);

    // Agregamos los alumnos a la instancia del curso
    curso.agregarAlumnoAlCurso(cursada);
    curso.agregarAlumnoAlCurso(cursada2);

     // Ejecutamos el método que queremos testear  y guardamos su resultado
    const promedioBueno = curso.buenDesempenio();
    
    // Creamos el valor conocido / esperado
    const promedioBuenoEsperado = true;
    
    // Aserción
    expect(promedioBueno).toBe(promedioBuenoEsperado);
})