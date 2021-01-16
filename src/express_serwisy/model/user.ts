export class User {
    name: string;
    age: number;
    pesel: string;


    constructor(name: string, score: number, pesel: string) {
        this.name = name;
        this.age = score;
        this.pesel = pesel;
    }

    static empty(): User {
        return new User('', 0, '');
    }
}


