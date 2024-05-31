export class Materia{
    nombre;

    calificacionesDePrimeraVuelta(calificaciones){        
        return calificaciones.filter(c => c.sosDePrimeraInstancia());

    }
    estaPromocionada(calificaciones){
        return false;
    }
    estaAprobada(calificaciones){
        return calificaciones
        .filter(c => c.notaMayorOIgualA(6))
        .length >= 2;
    }
}

// filter -> método de colección -> filtra, le pasas una colección x y devuelve colección x
// filtrados en base a la condicion que le pediste