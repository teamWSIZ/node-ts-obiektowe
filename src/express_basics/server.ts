const express = require('express');
const app = express();
const port = 3001;


//todo:
//  - dopisać funckję zapisu nowych wyników do pliku score.csv
//  - całość dostępu do pliku scores.csv ująć w jednej klasie z odpowiednimi metodami (i np. nazwą pliku ustalaną w konstruktorze)
//  - dopisać kilka testów
//  - dopisać kilka metod typowych dla zarządzania tablicą highscores (np. najlepsze dla danego gracza, tablicę rankingową)

// ------------ wczytywanie danych z pliku
const fs = require('fs');
const readline = require('readline');

class Score {
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}

app.s = [];

app.get('/', (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/post', (req, res) => {
    let name = req.query.name;
    let score = parseInt(req.query.score);
    let score2 = score * score;
    app.s.push('12');
    console.log(app.s);
    // (....)
    fs.appendFile('score.csv', `${name},${score}\n`, (err) => {
        if (err)
            console.log('error occurred:' + err);
    });
    res.send({"comment": `Got: ${name} -> ${score}; (kw = ${score2})`});
});

app.get('/scores', (req, res) => {
    let results = [];
    const rl = readline.createInterface({
        input: fs.createReadStream('score.csv'),
        crlfDelay: Infinity
    });
    rl.on('line', (line) => {
        if (line.indexOf('---')>=0) {
            res.send({"result": results});
        }
        let fields = line.split(',');
        results.push(new Score(fields[0], parseInt(fields[1])));
    });

});

console.log(`Starting app on port ${port}`);
app.listen(port, '0.0.0.0');
