import {CarMaintenanceShop} from './car_maintenance_shop';


export class Car {
  name: string;
  private engine: string;

  constructor(name: string, engine: string) {
    this.name = name;
    this.engine = engine;
  }

  private upgrade_engine() {
    //metoda używana by zmienić "nieco" własność silnika
    //np. by zachowywał się inaczej...
    //znowu: nie chcemy by to wykonywał klient;
    //tylko samochód sam powinien móc to uruchomić
    //np. ze względu na zmianę warunków atmosferycznych
    this.engine += '.';
  }

  service_car(shop: CarMaintenanceShop, opration: string) {
    console.log(`Service ${shop.name} wykonuje ${opration}`);
    if (opration==='upgrade engine') {
      this.upgrade_engine();
      console.log(`Service ${shop.name} wykonał skutecznie ${opration}`);
    }
  }

  //publiczna metoda klasy
  get_engine_type(): string {
    return this.engine;
  }
}
