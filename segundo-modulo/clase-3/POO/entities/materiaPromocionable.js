import { Materia } from "./materia.js";

export class MateriaPromocionable extends Materia {
    
    estaPromocionada(calificaciones){
        // si en Materia.js existia este método, en MateriaPromocionable iba a 
        // existir igual, a eso lo llamamos herencia
        // pero lo podemos redefinir
        return super
        .calificacionesDePrimeraVuelta(calificaciones)
        .every(c => c.notaMayorOIgualA(8));
        // Materia es superclase o clase padre
    }
}