import { Localizacion } from "../entities/localizacion";

test("", () => {
    // Configuramos los datos de prueba
    const localizacion1 = new Localizacion(15, 20);

    const localizacion2 = new Localizacion(15, 30);
    
    // Ejecutamos el método que queremos testear  y guardamos su resultado
    const distancia = Math.round(localizacion1.distanciaHasta(localizacion2));
    
    // Creamos el valor conocido / esperado
    const distanciaEsperada = 10;

    // Aserción
    expect(distancia).toBe(distanciaEsperada);

})