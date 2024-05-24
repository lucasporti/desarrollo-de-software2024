export class Localizacion{
    
    constructor(latitud, longitud){
        this.latitud = latitud;
        this.longitud = longitud;
    }
    
    distanciaHasta(otroPunto){
        const difAbsEntreLat = Math.pow(
            Math.abs(this.latitud - otroPunto.latitud), 2
        );
        const difAbsEntreLong = Math.pow(
            Math.abs(this.longitud - otroPunto.longitud ), 2
        );
        return Math.sqrt(difAbsEntreLat + difAbsEntreLong);
    }
    
}