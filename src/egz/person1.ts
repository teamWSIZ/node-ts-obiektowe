export class Person {
    name: string;
    age: number;

}

let p1 = new Person();
let p2 = new Person();

p2 = p1;

p1.name = 'Dijkstra';
p2.name = 'Bernstein';

let w = undefined;
w += 1;
console.log(w);
w = '11';
console.log(w)
