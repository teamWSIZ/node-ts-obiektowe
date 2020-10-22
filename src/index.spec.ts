import {add} from "./index";
import {Machine} from "./machine";

/**
 * Prosty przykład testu, uruchamianie:
 * npm test
 */

xdescribe("add", () => {

    it("can add two numbers", () =>  {
        console.log('should not be seeeeeeeen');
        expect(add(2, 2)).toEqual(4);
    });

    it('can create cars', () => {
        let c = new Machine('xx', 'powerful');
        expect(c.engine).toEqual('powerful');
    });

});
