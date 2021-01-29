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
        if (this.name === undefined) {
            return false;
        }
    }



    static empty(): User {
        return new User('', 0, '');
    }
}


