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

const port = 3001;

app.get('/', async (req, res) => {
    console.log('test stanu aplikacji');
    res.send({"comment": 'App works ok!'});
});

app.get('/users', async (req, res) => {
    let limitstring = req.query.limit;
    if (limitstring===undefined) limitstring='5';
    let limit = parseInt(limitstring);

    pool.query('select * from gopass.users order by email limit $1', [limit], (er, re) => {
        if (er) throw er;
        res.send(re.rows);
    });
});

app.get('/usercount', async (req, res) => {
    let rrr = await pool.query('select count(*) from gopass.users', []);
    res.send(rrr.rows[0]);
});

app.get('/createuser', async (req, res) => {
    let email = req.query.email;
    let pass = req.query.hashpass;
    // ↑↑ to musi być podane z przeglądarki
    let nu = await pool.query('insert into gopass.users(email, hashpass) VALUES ($1,$2) returning *',
        [email, pass]);
    res.send(nu.rows[0]);
});



app.post('/users', async (req, res) => {
    let body = req.body;
    console.log(`Saving ${JSON.stringify(body)}`);
    pool.query('insert into gopass.users(email, hashpass) values ($1,$2) returning *',
        [body.email, body.hashpass], (error, response) => {
            if (error) {
                console.log('error occurred')
                res.send({"error": "Error saving user"}, 400)
            } else {
                res.send(response.rows[0]);
            }
        });
});



app.get('/greet', async (req, res) => {
    console.log('/greet path called');
    res.send({"comment": "hi there!"});
});


console.log(`Starting app; try: http://localhost:${port}/users`);

// let x = {"comment":"App works ok!"}
// console.log(x['comment'])


app.listen(port, '0.0.0.0');
