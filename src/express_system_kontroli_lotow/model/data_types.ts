import {BaseAircraft} from "./aircraft_types";


export class Position {
    latitude: number;
    longitude: number;
    altitudeFt: number;

    constructor(latitude: number, longitude: number, altitudeFt: number) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitudeFt = altitudeFt;
    }
}

export class Speed2D {
    track: number; //kąt; 0 == północ, 90=wschód
    speedKt: number;

    constructor(track: number, speedKt: number) {
        this.track = track;
        this.speedKt = speedKt;
    }
}


export class ScanResult {
    timestamp: number; //data utworzenia tych wyników
    aircraft: BaseAircraft[];
}
