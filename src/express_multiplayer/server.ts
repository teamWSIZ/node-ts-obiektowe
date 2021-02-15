import {Position, User} from "./_model/user";

const express = require('express');
const app = express();

const port = 3001;

app.s = [];

/**
 * - Użytkownicy mają pozycję na planszy 10x10 (0...9, 0...9)
 * - W każdym ruchu (http call) mogą się przemieścić tylko o jedno pole w ←↓→↑
 * - wchodząc na pole "zabijają" użytkowników którzy są już na tym polu
 */



class Game {
    users: Map<string, User>; //to jest tylko "deklaracja"

    constructor() {
        //uruchamiany przy tworzeniu obiektów typu Game
        this.users = new Map<string, User>();  //tworzymy "userstore", czyli naszą bazę userów
        console.log(`tworzę obiekt klasy Game`);
    }

    createUser(userName: string, pin: number): User {
        let u = new User(userName, pin);
        console.log(`Creating user ${userName}`);
        //todo -- sprawdzić czy nie nadpisujemy istniejącego usera...
        this.users.set(userName, u);
        console.log(`Game now has ${this.users.size} users`);
        return u;
    }

    moveUserToPosition(userName: string, pin: number, newX: number, newY: number): User {
        //todo: sprawdzić czy user istnieje i czy pin się zgadza
        if (!this.users.has(userName) || this.users.get(userName).pin != pin) {
            throw new Error('Unauthorized');
        }
        let u = this.users.get(userName);
        //todo: sprawdzić czy nowa pozycja jest prawidłowym ruchem (←↓→↑)
        if (newX<0 || newX>9 || newY<0 || newY>9) {
            throw new Error('Move out of board');
        }
        let distance = Math.abs(newX - u.position.x) + Math.abs(newY - u.position.y);
        if (distance != 1) {
            throw new Error('Illegal move');
        }
        //todo: wykonać ruch
        u.position = new Position(newX, newY);
        console.log(`Nowa pozycja usera: ${newX}, ${newY}`);
        return u;
    }
}

let game = new Game();  //wszystkie informacje o jedynej grze która jest dostępna


app.get('/', async (req, res) => {
    res.send({"comment": 'App works ok!'});
});

app.get('/users', async (req, res) => {
    let u = new User('kadabra', 112);
    User.noNeedForInstance();   //użycie metody statycznej
    res.send(User.schoolUser('Dijkstra'));
});

app.get('/users/create', async (req, res) => {
    let newUserName = req.query.name;
    let pinString = req.query.pin;
    let pinNumber = parseInt(pinString);
    if (pinNumber === undefined || isNaN(pinNumber)) {
        res.status(400).send({'comment': 'PIN ma być liczbą całkowitą'});
        return;
    }
        console.log(pinNumber);
    let created = game.createUser(newUserName, pinNumber);
    res.send(created);
});

app.get('/move', async (req, res) => {
    let userName = req.query.name;
    let pin = parseInt(req.query.pin);
    let newx = parseInt(req.query.newx);
    let newy = parseInt(req.query.newy);
    try {
        let newUserState = game.moveUserToPosition(userName, pin, newx, newy);
        res.send(newUserState);

    } catch (e) {
        res.status(400).send({"comment": e.message});
    }
});


app.get('/greet', async (req, res) => {
    console.log('/greet path called');
    res.send({"comment": "hi there!"});
});


console.log(`Starting app; try: http://localhost:${port}/users`);


app.listen(port, '0.0.0.0');
