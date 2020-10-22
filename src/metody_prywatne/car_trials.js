"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var car_maintenance_shop_1 = require("./car_maintenance_shop");
var c = new car_1.Car('Duagong', 'V12');
console.log(c.get_engine_type());
var engine = c.get_engine_type();
engine = 'V16'; //to nie zmienia stanu silnika!!
// c.engine = 'V10';  //to nie działa, bo nie ma dostępu do pola engine (które jest private)
// c.upgrade_engine();  //operacja nielegalna -- nie skompiluje się...
console.log(c.get_engine_type());
//Prawidłowy serwis samochodu...
var shop = new car_maintenance_shop_1.CarMaintenanceShop('Duagong Authorized Service 00123');
c.service_car(shop, 'change tyres');
c.service_car(shop, 'upgrade engine');
console.log(c.get_engine_type());
