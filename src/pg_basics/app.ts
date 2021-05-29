const express = require('express');
const app = express();

app.use(express.json());

// const bodyParser = require('body-parser');
// app.use(bodyParser);

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
    res.send({"comment": 'App works ok!'});
});

app.get('/users', async (req, res) => {
    // let u = new User('kadabra', 112);
    // res.send(u);
    pool.query('select * from gopass.users', [], (er, re) => {
        if (er) throw er;
        res.send(re.rows);
    });
});

app.get('/usercount', async (req, res) => {
    // let u = new User('kadabra', 112);
    // res.send(u);
    let count = (await pool.query('select count(*) from gopass.users', [])).rows[0];
    res.send(count);

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
