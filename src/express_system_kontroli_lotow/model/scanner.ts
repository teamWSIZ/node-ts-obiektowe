import {ScanResult} from "./data_types";
import axios from "axios";
import {Exam} from "../../express_serwisy/model/exam";


export interface SkyScanner {
    scan(); //wykonuje skan; wyniki zapamiętuje wewnętrznie
    getScanResults(): Promise<ScanResult>; //zwraca (jakieś) wyniki [może np. średnie z ostatnich 3 pomiarów]
}

export class FlightRadar24SkyScanner implements SkyScanner {
    latMin: number;
    latMax: number;
    longMin: number;
    longMax: number;

    constructor(latMin, latMax, longMin, longMax) {
        this.latMin = latMin;
        this.latMax = latMax;
        this.longMin = longMin;
        this.longMax = longMax;
    }

    async getScanResults(): Promise<ScanResult> {
        return undefined;
    }

    async scan() {
        let url = `https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=51.57,43.98,18.40,19.68`;
        let agent = `Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0`;
        try {
            let res = await axios.get(url, {headers: {'User-Agent': agent}});
            console.log('here....', res.data, typeof res.data, res.data.full_count);
            for (const property in res.data) {
                console.log(`${property}: ${res.data[property]}`);
            }
            // for(const item of res.data.entries) {
            //     console.log(item);
            // }
        } catch (e) {
            console.log('error occurred:', e);
        }
        // let result: Exam[] = [];
        // console.log(JSON.stringify(res));
        // res.data.forEach((item) => {
        //     console.log(item);
        //     // result.push(Object.assign(new Exam(), item));
        // });
    }

}
