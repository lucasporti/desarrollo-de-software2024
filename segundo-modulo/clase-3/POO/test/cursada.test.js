// probar metodo promedio y fue aprobada de cursada
import { Cursada } from "../entities/cursada";
import { Calificacion } from "../entities/calificacion";

test("Calculamos el promedio del alumno Roberto Perez, y nos da que tiene promedio 5", () => {
    // Configuramos los datos de prueba
    const cursada = new Cursada("Roberto", "Perez");
    const calificacion = new Calificacion();
    calificacion.nota = 6;
    cursada.agregarCalificacion(calificacion);
    const calificacion2 = new Calificacion();
    calificacion2.nota = 4;
    cursada.agregarCalificacion(calificacion2);

     // Ejecutamos el método que queremos testear  y guardamos su resultado
    const cursadaAprobada = cursada.promedio();
    
    // Creamos el valor conocido / esperado
    const cursadaAprobadaEsperada = 5;
    
    // Aserción
    expect(cursadaAprobada).toBe(cursadaAprobadaEsperada);
    
})

test("Calculamos si el alumno Roberto Perez aprobó la cursada, y nos da que no la aprobo", () => {
     // Configuramos los datos de prueba
     const cursada = new Cursada("Roberto", "Perez");
     const calificacion = new Calificacion();
     calificacion.nota = 5;
     cursada.agregarCalificacion(calificacion);
     const calificacion2 = new Calificacion();
     calificacion2.nota = 4;
     cursada.agregarCalificacion(calificacion2);
 
      // Ejecutamos el método que queremos testear  y guardamos su resultado
     const cursadaAprobada = cursada.fueAprobada();
     
     // Creamos el valor conocido / esperado
     const cursadaAprobadaEsperada = false;
     
     // Aserción
     expect(cursadaAprobada).toBe(cursadaAprobadaEsperada);
})