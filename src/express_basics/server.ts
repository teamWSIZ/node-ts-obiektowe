import {User} from "./_model/user";

const express = require('express');
const app = express();

const port = 3001;

app.s = [];

app.get('/', (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/users', (req, res) => {
    let u = new User('kadabra', 112);
    res.send(u);
});

console.log(`Starting app; try: http://localhost:${port}/users`);
app.listen(port, '0.0.0.0');
