import {User} from "./_model/user";

const express = require('express');
const app = express();

const port = 3002;

app.s = [];

app.get('/', async (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/users', async (req, res) => {
    let u1 = new User('kadabra1', 112);
    let u2 = new User('kadabra2', 113);
    res.send([u1, u2]);
});

app.get('/greet', async (req, res) => {
    console.log('/greet path called');
    res.send({"comment": "hi there!"});
});


console.log(`Starting app; try: http://localhost:${port}/users`);

// let x = {"comment":"App works ok!"}
// console.log(x['comment'])


app.listen(port, '0.0.0.0');
