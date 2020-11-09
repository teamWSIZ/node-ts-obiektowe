class Simple implements InitializingService {
    initalize() {
        console.log('inicjalizuję instancję klasy Simple')
    }

    print(s: string): number {
        return 1;
    }
}

/**
 * Serwis monitorujący serwer Discorda
 */
class DicordServerMonitor implements InitializingService, DisposeableService {
    server_name: string;
    connection: string; //to powinno być połączenie http

    constructor(server_name: string) {
        console.log('Tworzymy DiscordServerMonitor');
        this.server_name = server_name;
        this.connection = 'disconnected';
    }

    initalize() {
        //tą metodę możemy uruchomić kiedy nam wygodnie (nie tylko przy tworzeniu instancji...
        console.log(`Inicjalizacja monitora serwera discor: ${this.server_name}`);
        this.connection = 'established';
    }

    print(s: string): number {
        return 0;
    }

    dispose() {
        console.log(`Odłączamy monitor serwera ${this.server_name}`)
        this.connection = 'disconnected';
    }
}

export interface InitializingService {
    initalize();    //interface specyfikuje funkcje (ich "synatury" -- argumenty i wyniki); nie ma implementacji
    print(s: string): number;  //dopisana dla ilustracji
}

export interface DisposeableService {
    /**
     * Method to be called before the service is destroyed.
     */
    dispose();
}

let s = new Simple();
console.log('działa');
s.initalize();
/////
let monitor = new DicordServerMonitor('hidden_hacker');
console.log(monitor.connection);
monitor.initalize()
console.log(monitor.connection);
////
console.log('-----------------')
/// to mają być serwisy które mamy dostępne.... będziemy chcieli je wspólnie zainicjalizować...
let services: InitializingService[] = []        //←← tu występuje jako typ _interfejs_ a nie konkretna klasa
services.push(new Simple());
services.push(new DicordServerMonitor('ab1'));
services.push(new Simple());
services.push(new DicordServerMonitor('xyz'));
//↑↑ początek skomplikowanej aplikacji
// -- teraz inicjalizujemy wszystkie serwisy/pluginy...
for(let s of services) {
    s.initalize();
}

