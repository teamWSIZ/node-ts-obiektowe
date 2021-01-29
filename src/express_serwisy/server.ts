import {User} from "./model/user";
import {LoggerService, TimedLoggerService} from "./service/logger-service";
import {ClickbaitService} from "./service/clickbait-service";
import {ExamService} from "./service/exam-service";
import {StatusCodes} from "http-status-codes";
import {TimerService} from "./service/timer-service";

const express = require('express');
const app = express();

//pozwala na import stałych z json-a; trzeba ustawić opcje kompilacji w tsconfig.json
// import {LoggerService} from "./service/logger-service";
// import {ExternalDataService} from "./service/external-data-service";
const port = 3001;


//startup
let logger: LoggerService = new TimedLoggerService();
let clickbaitService = new ClickbaitService(logger);   //przekazuje instancję logera do serwisu clickbait
let examsService = new ExamService('https://doha.wsi.edu.pl:5200', logger);
let timerService = new TimerService();

// let data = new ExternalDataService('https://doha.wsi.edu.pl:5200', app.service.log);

app.get('/', async (req, res) => {
    await logger.info('Some info');
    res.send({"comment": 'App works ok!'});
});

app.get('/post', async (req, res) => {
    //sposób na odczytanie danych przekazanych w parametrze zapytania http GET
    await clickbaitService.click();

    let name = req.query.name;
    let age: number;
    try {
        age = parseInt(req.query.age);
    } catch (e) {
        res.status(400);
        res.send({'comment': 'age must be a number'});
    }
    let pesel = req.query.pesel;
    let u = new User(name, age, pesel);
    if (!u.isValid()) {
        await logger.error('Data missing in call to /post');
        res.status(StatusCodes.BAD_REQUEST);
        res.send({'comment': 'parameters name,age,pesel are obligatory; values must be proper!'});
        return;
    }

    await logger.info(JSON.stringify(u));

    res.send(u);
});

app.get('/clicks', async (req, res) => {
    res.send({"clicks": await clickbaitService.getClicks()});
});

app.get('/exams', async (req, res) => {
    // req.query to dict; 'active' in req.query sprawdza czy taki klucz jest w dict,
    // czyli czy klient przysłał ten parametr
    let active = ('active' in req.query && req.query.active);
    await logger.info(`Active=${active}`);
    res.send({"exams": await examsService.getAllExams(active)});
});

app.get('/time', async (req, res) => {
    res.send({"server_time": timerService.getCurrentServerTimestamp()});
});


console.log(`Starting app: http://localhost:${port}/post`);
app.listen(port, '0.0.0.0');
