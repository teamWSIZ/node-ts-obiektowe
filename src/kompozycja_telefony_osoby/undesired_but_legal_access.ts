import {Person} from './person';
import {Smartphone} from './smartphone';


let p = new Person('Hu Xiaomi', 50);
p.add_smartphone(new Smartphone('nn', 100, false));
// console.log(p.smartphones.length);
p.smartphones[0].is_5G_capable = true;
console.log(p.smartphones[0].is_5G_capable);
