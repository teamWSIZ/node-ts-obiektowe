export class Person {
    name: string;
    private age: number;

    constructor(name: string, age: number = 0) {
        this.name = name;
        this.age = age;
    }

    set_age(newage: number) {
        this.age = newage;
    }
}

let p1 = new Person('a');
p1.set_age(22); //linia 1
p1.age = 88;    //linia 2

