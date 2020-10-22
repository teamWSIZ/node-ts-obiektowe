import {Simcard} from './simcard';
import {v4 as uuidv4} from 'uuid';

export class Smartphone {
    name: string;
    price: number;
    is_5G_capable: boolean;
    simcard: Simcard;   //kompozycja: klasa Smartphone ma dostęp do klasy Simcard
    id: string; //unikalny ID telefonu -- tzw. UUID


    constructor(name: string, price: number, is_5G_capable: boolean = false) {
        this.name = name;
        this.price = price;
        this.is_5G_capable = is_5G_capable;
        this.simcard = undefined;
        this.generate_uuid();
    }

    verbose(): string {
        return `Phone(name:${this.name}, price:${this.price}, 5G:${this.is_5G_capable}, id:${this.id})`;
    }

    simcard_simcard() {
        //trzeba sprawdzić czy czasem już nie mamy simcard-y....
    }

    /**
     * Nadajemy telefonowi unikalny ID, ale tylko jeśli go dotychczas nie ma.
     */
    private generate_uuid() {
        //używamy biblioteki `uuid`, https://www.npmjs.com/package/uuid
        if (this.id == undefined) {
            this.id = uuidv4().toString();
        }
    }

}
