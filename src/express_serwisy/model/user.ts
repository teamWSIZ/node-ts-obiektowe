export class User {
    name: string;
    age: number;
    pesel: string;


    constructor(name: string, score: number, pesel: string) {
        this.name = name;
        this.age = score;
        this.pesel = pesel;
    }

    isValid(): boolean {
        if (this.name === undefined || this.age===undefined || this.pesel===undefined) {
            console.log('parameters undefined')
            return false;
        }
        if (this.name.length==0 || this.age<0 || this.age>140 || this.pesel.length<9) {
            console.log('parameter values are out of range')
            return false;
        }
        return true;
    }



    static empty(): User {
        return new User('', 0, '');
    }
}


