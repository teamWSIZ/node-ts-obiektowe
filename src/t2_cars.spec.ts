import {Car} from "./metody_prywatne/car";
import {CarMaintenanceShop} from "./metody_prywatne/car_maintenance_shop";

describe('Simple tests', () => {
  it('prosty test równości działą', () => {    /*...*/
    let g = 12;
    expect(g).toEqual(12);
  });

  it('typy działają', () => {
    let c = new Car('Experimental1', 'x500hp1');
    expect(c.get_engine_type()).toEqual('x500hp1');
  });

  it('Prawidłowy serwis samochodu', () => {
    //Prawidłowy serwis samochodu...
    let c = new Car('Duagong', 'V12');
    let shop = new CarMaintenanceShop('Duagong Authorized Service 00123');
    c.service_car(shop, 'change tyres');
    c.service_car(shop, 'upgrade engine');
    expect(c.get_engine_type()).toEqual('V12.');
  });
});
