import { Calificacion } from "../entities/calificacion";
import { Materia } from "../entities/materia";
import { MateriaPromocionable } from "../entities/materiaPromocionable";

var analisisMatematico;
var disenioDeSistemas;

beforeEach(() => {
    // cada test debe ser atómico entre si
    analisisMatematico = new MateriaPromocionable();
    disenioDeSistemas = new Materia();
});

test("Con 8 y 8 promocionamos Diseño De Sistemas", () => {
    const nota1 = new Calificacion(8, 1);
    const nota2= new Calificacion(8,1);
    // simplificamos la aserción llamando al resultado esperado y al resultado obtenido en el mismo expect
    expect(
        analisisMatematico.
        estaPromocionada([nota1, nota2]))
        .toBeTruthy();
})

test("Con 8 y 8 no promocionamos Diseño de Sistemas", () => {
    const nota1 = new Calificacion(8, 1);
    const nota2= new Calificacion(8,1);

    expect(
        disenioDeSistemas.estaPromocionada([nota1, nota2])
    ).toBeFalsy()
})

test("Con 6 y 7 aprobamos Diseño de Sistemas", () => {
    const nota1 = new Calificacion(8, 1);
    const nota2= new Calificacion(8,1);
    
    expect(
        disenioDeSistemas.estaAprobada([nota1, nota2])
    ).toBeTruthy()
})

test("Con 6 y 7 aprobamos Análisis Matemático", () => {
    const nota1 = new Calificacion(8, 1);
    const nota2= new Calificacion(8,1);
    
    expect(
        analisisMatematico.estaAprobada([nota1, nota2])
    ).toBeTruthy()
})

test("Con 5 y 6 aprobamos Análisis Matemático", () => {
    const nota1 = new Calificacion(5, 1);
    const nota2= new Calificacion(6,1);
    
    expect(
        analisisMatematico.estaAprobada([nota1, nota2])
    ).toBeFalsy()
})