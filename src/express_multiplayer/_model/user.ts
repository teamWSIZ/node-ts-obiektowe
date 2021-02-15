export class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class User {
    name: string;
    pin: number;
    position: Position;

    constructor(name: string, pin: number) {
        this.name = name;
        this.pin = pin;
        this.position = new Position(5, 5);
    }

    static empty(): User {
        return new User('', 0);
    }

    static schoolUser(username: string): User {
        return new User(username, 1000);
    }

    static noNeedForInstance() {
        console.log('to działa bez instancji')
    }

    getName(): string {
        return this.name;
    }
}
