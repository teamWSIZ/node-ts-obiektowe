import {Smartphone} from './smartphone';
import {Simcard} from './simcard';

export class Person {
  name: string;
  age: number;
  smartphones: Smartphone[];  //urządzenia dostępne osobie
  simcards: Simcard[];    //dostępne numery telefonów

  /**
   * Tworzymy instancję klasy Person zakładając, że nie ma Smartphone's i Simcard's.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.smartphones = [];
    this.simcards = [];
  }

  /**
   * Raport o instancji w postaci napisu (string).
   */
  verbose(): string {
    return `Osoba(${this.name},${this.age},smartphones:${JSON.stringify(this.smartphones)})`;
  }

  rename(newname: string) {
    //todo:  metoda zmieniająca nazwę osoby
  }

  celebrate_birthday() {
    // metoda de facto zwiększająca wiek o 1 ...
    // jak undefined to ... ?
    //todo: napisać testy
    console.log(`Osoba ${this.name} imprezuje z okazji swoich ${this.age + 1} urodzin`);
    this.age += 1;
  }

  add_smartphone(phone: Smartphone) {
    //to powinien być jedyny sposób dodawania telefonów osobom...
    //todo:
    //  - dodać warunek by osoba o wieku <18 lat nie mogła posiadać drogich telefonów, czyli price >1000
    //  - dodać warunek by ososba nie mogła mieć więcej niż 3 smartphone'y
    //  - napisać testy
    this.smartphones.push(phone);
  }

  insert_simcard_to_phone(phonenumber: string, phoneid: string) {
    //Metoda przy wywołaniu której osoba próbuje wpiąć kartę o podanym numerze, do
    //podanego telefonu....
    //todo: co zrobić z phoneid? - jest potrzebny tylko unikalny dla osoby
  }

}
