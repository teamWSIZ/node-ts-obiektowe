interface Moveable {
    setLocation(newLocation: number[]);
}

interface Localized {
    getLocation(): number[];
}

interface Reactive {
    onKeyPressed(key: string);
}

//To jest klasa bazowa -- czyli "dziedziczce z niej" klasy będą miały jej dane i metody (póki nie zrobią Override)
class ActorBase {
    name: string;

    getName(): string {
        return this.name;
    }
}

//"Rozszerzenie" klasy ActorBase, dające możliwość lokalizacji
class LocalizedActor extends ActorBase implements Localized {
    getLocation(): number[] {
        console.log(super.getName());   //odwołanie do metod klasy bazowej
        return [];
    }
}

//"Rozszerzenie" klasy LocalizedActor (i przez to też klasy ActorBase)
class MoveableActor extends LocalizedActor implements Moveable {
    setLocation(newLocation: number[]) {
    }
}

class ReactiveActor extends MoveableActor implements Reactive {
    onKeyPressed(key: string) {
    }
}

class Component implements Moveable {
    setLocation(newLocation: number[]) {
    }
}

//Tu już nasze klasy które "rozszerzają" jakąś z wybranych klas aktorów ↑↑
//
class MyActor extends ReactiveActor {
    components: Component[];    //tu jest przykład "kompozycji", czyli klasa ma w sobie referencje do innych

    myFunction() {
        //tu też jest dostęp do _wszystkich_ metod i pól wszystkich klas "nad" MyActor...
        this.onKeyPressed('x');
        this.setLocation([1, 2, 3]);
        this.getLocation();
        this.getName();
    }
}


///jak to wykorzystywać, czyli "spawn-owanie" instancji tych klas...

let actor1 = new MyActor();
console.log(actor1.getName()); // można wykorzystywać metody tego aktora...
let actors: ActorBase[] = [];
for (let i = 0; i < 100; i++) {
    //spawnowanie bardzo wielu aktorów...
    actors.push(new MyActor());
}
console.log(actors.length);


