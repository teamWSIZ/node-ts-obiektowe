import {Aircraft, LocalizedAircraft, MobileAircraft, RegisteredAircraft} from "./aircraft_interfaces";
import {Position, Speed2D} from "./data_types";


export class BaseAircraft implements Aircraft, LocalizedAircraft, MobileAircraft, RegisteredAircraft {
    getIcaoId(): string {
        return "";
    }

    getPosition(): Position {
        return undefined;
    }

    getRegistrationNumber(): string {
        return "";
    }

    getSpeed(): Speed2D {
        return undefined;
    }

    getType(): string {
        return "";
    }


}
