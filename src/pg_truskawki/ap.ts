const express = require('express');
const app = express();

app.use(express.json());

// ustawienie połączenia z bazą
const Pool = require('pg').Pool;
const pool = new Pool({
    host: '10.10.0.33',
    port: 5432,
    database: 'student',
    user: 'student',
    password: 'wsiz#1234'
});

const port = 3030;

app.get('/', async (req, res) => {
    console.log('test stanu aplikacji');
    res.send({"comment": 'App works ok!'});
});

app.get('/ceny', async (req, res) => {
    let limitstring = req.query.limit;
    if (limitstring===undefined) limitstring='50';
    let limit = parseInt(limitstring);

    pool.query('select * from truskawki.cena order by data desc limit $1', [limit], (er, re) => {
        if (er) throw er;
        res.send(re.rows);
    });
});


app.get('/cena/add', async (req, res) => {
    let cenakg = req.query.cenakg;
    let lokalizacjaid = req.query.lokalizacjaid;
    let data = new Date();

    console.log(`Zapisuje do lokid=${lokalizacjaid}`);

    // ↑↑ to musi być podane z przeglądarki
    let nu = await pool.query('insert into truskawki.cena(cenakg,lokalizacjaid,data) ' +
        'VALUES ($1,$2,$3) returning *', [cenakg, lokalizacjaid, data]);
    res.send(nu.rows[0]);
});





console.log(`Starting app; try: http://localhost:${port}/ceny`);

// let x = {"comment":"App works ok!"}
// console.log(x['comment'])


app.listen(port, '0.0.0.0');
