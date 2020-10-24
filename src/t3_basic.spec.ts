import {Car} from "./metody_prywatne/car";
import {CarMaintenanceShop} from "./metody_prywatne/car_maintenance_shop";

let add = (a, b) => {
    return a + b;
}

describe('Simple tests', function () {

    it('prosty test równości działą', function () {    /*...*/
        let g = 12;
        let h = 23;
        expect(g + h).toEqual(35);
    });

    it('funkcja powinna dodawać liczby całkowite dodatnie', () => {
        expect(add(2, 5)).toEqual(7);
    });

    it('funkcja powinna dodawać liczby całkowite również ujemne', () => {
        expect(add(2, -5)).toEqual(-3);
    });

    it('funkcja powinna dodawać liczby ułamkowe', () => {
        expect(add(2.1, 0.03)).toEqual(2.13);
    });

    it('funkcja powinna dodawać duże liczby', () => {
        expect(add(1000000000000000000000000, 1000000000000000000000000))
            .toEqual(2000000000000000000000000);
    });
});
