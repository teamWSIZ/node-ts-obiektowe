import {Position, Speed2D} from "./data_types";

export interface Aircraft {
    getType(): string;
    getIcaoId(): string;
}

export interface LocalizedAircraft {
    getPosition(): Position;
}

export interface MobileAircraft {
    getSpeed(): Speed2D;
}

export interface RegisteredAircraft {
    getRegistrationNumber(): string;
}


