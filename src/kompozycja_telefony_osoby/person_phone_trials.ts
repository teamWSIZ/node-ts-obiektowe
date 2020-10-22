import {Person} from './person';
import {Smartphone} from './smartphone';


let p = new Person('Ramses', 25);

let telefon_egipski = new Smartphone('Samsung', 400);
let telefon_eksperymentalny = new Smartphone('Samsung', 600, true);

//teraz dodamy Ramzesowi telefon
p.add_smartphone(telefon_egipski);
p.add_smartphone(telefon_eksperymentalny);

console.log(p.verbose());
