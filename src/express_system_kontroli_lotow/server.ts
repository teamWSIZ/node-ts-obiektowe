import {LoggerService, TimedLoggerService} from "../express_serwisy/service/logger-service";
import {TimerService} from "../express_serwisy/service/timer-service";
import {BaseAircraft} from "./model/aircraft_types";
import {ScanResult} from "./model/data_types";
import {FlightRadar24SkyScanner} from "./model/scanner";

const express = require('express');
const app = express();

//pozwala na import stałych z json-a; trzeba ustawić opcje kompilacji w tsconfig.json
const port = 3011;


//startup
let logger: LoggerService = new TimedLoggerService();
let timerService = new TimerService();
let fr24Service = new FlightRadar24SkyScanner(49, 50, 18, 19);


app.get('/', (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/scan', async (req, res) => {
    let ba = new BaseAircraft();
    let sc = new ScanResult();
    await fr24Service.scan();
    res.send({"comment": JSON.stringify(ba)}); //proper serialization to JSON of BaseAircraft
});


console.log(`Starting app: http://localhost:${port}/scan`);
app.listen(port, '0.0.0.0');
