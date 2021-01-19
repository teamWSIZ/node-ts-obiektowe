import {User} from "./model/user";
import {LoggerService, TimedLoggerService} from "./service/logger-service";
import {ClickbaitService} from "./service/clickbait-service";
import {ExamService} from "./service/exam-service";

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

// let data = new ExternalDataService('https://doha.wsi.edu.pl:5200', app.service.log);

app.get('/', async (req, res) => {
    await logger.info('Some info');
    res.send({"comment": 'App works ok!'});
});

app.get('/post', async (req, res) => {
    //sposób na odczytanie danych przekazanych w parametrze zapytania http GET
    await clickbaitService.click();

    let name = req.query.name;
    let age = parseInt(req.query.age);
    let pesel = req.query.pesel;
    if (name===undefined || age === undefined || pesel === undefined) {
        await logger.error('Data missing in call to /post');
        res.status(400);
        res.send({'comment': 'parameters name,age,pesel are obligatory'});
        return;
    }
    let u = new User(name, age, pesel);

    await logger.info(JSON.stringify(u));

    res.send(u);
});

app.get('/clicks', async (req, res) => {
    res.send({"clicks": await clickbaitService.getClicks()});
});

app.get('/exams', async (req, res) => {
    res.send({"exams": await examsService.getAllExams()});
});



console.log(`Starting app: http://localhost:${port}/post`);
app.listen(port, '0.0.0.0');
