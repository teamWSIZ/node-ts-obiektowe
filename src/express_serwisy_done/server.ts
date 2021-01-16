import {User} from "./_model/user";
import {Score} from "./_model/score";

const express = require('express');
const app = express();

//pozwala na import stałych z json-a; trzeba ustawić opcje kompilacji w tsconfig.json
import settings from './settings.json'
import {LoggerService} from "./service/logger-service";
import {ExternalDataService} from "./service/external-data-service";
const port = settings.port;



//startup
app.s = [];
app.service = {};

app.service.log = new LoggerService();
let data = new ExternalDataService('https://doha.wsi.edu.pl:5200', app.service.log);


// setInterval(() => console.log('tick'), 1000);
// setTimeout(() => console.log('later'));

//todo: Builder Pattern, https://medium.com/@itayelgazar/the-builder-pattern-in-node-js-typescript-4b81a70b2ea5
//todo: Object.assign(new Exam(), item),https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//done: express async, https://zellwk.com/blog/async-await-express/

app.get('/', (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/post', (req, res) => {
    //sposób na odczytanie danych przekazanych w parametrze zapytania http GET
    let name = req.query.name;
    let score = parseInt(req.query.score);
    res.send('ok');
});

app.get('/users', (req, res) => {
    //najprostszy "endpoint" zwracający dane
    res.send([new User('kadabra', 112)]);
});

app.get('/exams', async (req, res) => {
    //tego typu funkcja w express pozwala na używanie składni async/await; upraszcza korzystanie z asynchronicznych źródeł
    let exams = await data.getAllExams();
    res.send(exams);
});


console.log(`Starting app: http://localhost:${port}/exams`);
app.listen(port, '0.0.0.0');
