import {Person} from './person';

let p = new Person('Sun Tzu', 67);
let p2 = new Person('Ramses', undefined);

// console.log(p.verbal());

let users: Person[] = [p, p2];  //to będzie tablica osób... tu deklaracja, oraz explicite podanie typu

for(let u of users) {
  console.log(u.verbose());
}
p.celebrate_birthday();
p2.celebrate_birthday();

users[0].celebrate_birthday();
console.log(p.verbose());
console.log(JSON.stringify(p)) //to pozwala na szybkie wypisanie danych w instancji klasy

p.smartphones[0].is_5G_capable = true; //to bardzo nieładna akcja... nie powinna być możliwa... ale jest...
                                       //tzn. dowolny kod mający dostęp do instancji klasy Person może
                                       //zmienić techniczne możliwości jej telefonu...
