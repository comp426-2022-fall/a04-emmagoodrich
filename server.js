import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express()

const args = minimist(process.argv.slice(2))

const port = args.port || 5000

app.listen(port, () => {
	// console.log("Server listening on port " + port + ".")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
    res.status(200).send('200 OK');
}) 

//Endpoint /app/roll
app.get('/app/roll', (req, res, next) => {
    let numSides = 6;
    let numDice = 2;
    let numRolls = 1;
    res.status(200).send(roll(numSides, numDice, numRolls));
})

//Endpoint /app/roll/:sides/
app.get('app/roll/:sides', (req, res, next) => {
    let numSides = parseInt(req.params.sides);
    let numDice = 2;
    let numRolls = 1;    
    res.status(200).send(roll(numSides, numDice, numRolls));
})

//Endpoint /app/roll/:sides/:dice/
app.get('app/roll/:sides/:dice/', (req, res, next) => {
    let numSides = parseInt(req.params.sides);
    let numDice = parseInt(req.params.dice);
    let numRolls = 1;
    res.status(200).send(roll(numSides, numDice, numRolls));
})

//Endpoint /app/roll/:sides/:dice/:rolls
app.get('app/roll/:sides/:dice/:rolls', (req, res, next) => {
    let numSides = parseInt(req.params.sides);
    let numDice = parseInt(req.params.dice);
    let numRolls = parseInt(req.params.rolls);
    res.status(200).send(roll(numSides, numDice, numRolls));
})

app.post('/app/roll/', (req, res) => {
    let sides = 6 || parseInt(req.body.sides);
    let dice = 2 || parseInt(req.body.dice);
    let rolls = 1 || parseInt(req.body.rolls);
    res.status(200).send(roll(sides, dice, rolls));
})

//Default endpoint 
app.get('*', (req, res) => {
    console.error('error encountered');
    res.status(404).send('404 NOT FOUND');
})