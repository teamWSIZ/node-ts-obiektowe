import {Car} from './car';
import {CarMaintenanceShop} from './car_maintenance_shop';


let c = new Car('Duagong', 'V12');
console.log(c.get_engine_type());
let engine = c.get_engine_type();
engine = 'V16' //to nie zmienia stanu silnika!!

// c.engine = 'V10';  //to nie działa, bo nie ma dostępu do pola engine (które jest private)

// c.upgrade_engine();  //operacja nielegalna -- nie skompiluje się...
console.log(c.get_engine_type());

//Prawidłowy serwis samochodu...
let shop = new CarMaintenanceShop('Duagong Authorized Service 00123');
c.service_car(shop, 'change tyres');
c.service_car(shop, 'upgrade engine');
console.log(c.get_engine_type());
