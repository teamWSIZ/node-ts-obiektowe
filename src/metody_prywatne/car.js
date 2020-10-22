"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(name, engine) {
        this.name = name;
        this.engine = engine;
    }
    Car.prototype.upgrade_engine = function () {
        //metoda używana by zmienić "nieco" własność silnika
        //np. by zachowywał się inaczej...
        //znowu: nie chcemy by to wykonywał klient;
        //tylko samochód sam powinien móc to uruchomić
        //np. ze względu na zmianę warunków atmosferycznych
        this.engine += '.';
    };
    Car.prototype.service_car = function (shop, opration) {
        console.log("Service " + shop.name + " wykonuje " + opration);
        if (opration === 'upgrade engine') {
            this.upgrade_engine();
            console.log("Service " + shop.name + " wykona\u0142 skutecznie " + opration);
        }
    };
    //publiczna metoda klasy
    Car.prototype.get_engine_type = function () {
        return this.engine;
    };
    return Car;
}());
exports.Car = Car;
