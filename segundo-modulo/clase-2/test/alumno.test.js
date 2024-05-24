import { Alumno } from "../entities/alumno";

test("Le pregunto a Roberto su nombre completo y nos dice que es Roberto Perez", () => {
    // Configuramos los datos de prueba
    const unAlumno = new Alumno("Roberto", "Perez");

    // Ejecutamos el método que queremos testear  y guardamos su resultado
    const nombreCompleto = unAlumno.nombreCompleto();

    // Creamos el valor conocido / esperado
    const nombreCompletoEsperado = "Roberto Perez";

    // Aserción
    expect(nombreCompleto).toBe(nombreCompletoEsperado);

})

test("Le pregunto a Roberto su edad y nos dice que tiene 20 años", () => {
    // Configuramos los datos de prueba
    const unAlumno = new Alumno("Roberto", "Perez");
    unAlumno.fechaDeNacimiento = 2003;

    // Ejecutamos el método que queremos testear  y guardamos su resultado
    const edad = unAlumno.dameTuEdad();

    // Creamos el valor conocido / esperado
    const edadEsperada = 20;

    // Aserción
    expect(edad).toBe(edadEsperada);

})