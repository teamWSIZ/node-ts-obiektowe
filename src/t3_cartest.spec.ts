import {Car} from "./metody_prywatne/car";


describe('Simple tests', function () {


    it('tworzy prosty samochód', () => {
        let car = new Car('X1', '10hp');
        expect(car.name).toEqual('X1');
    });

    it('zmiana nazwy jest możliwa', () => {
        let car = new Car('X1', '10hp');
        car.set_name('Y1');
        expect(car.name).toEqual('Y1');
    });

});
