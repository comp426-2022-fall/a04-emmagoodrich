import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express()

const args = minimist(process.argv.slice(2))

if (args.port) {
    const port = args.port
} else {
    port = 5000
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
    res.status(200);
}) 

//Endpoint /app/roll
app.get('/app/roll', (req, res, next) => {
    console.log(roll(6, 2, 1));
})

//Endpoint /app/roll/:sides/
app.get('app/roll/:sides', (req, res, next) => {
    let numSides = req.params.sides;
    console.log(roll(numSides, 2, 1));
})

//Endpoint /app/roll/:sides/:dice/
app.get('app/roll/:sides/:dice/', (req, res, next) => {
    let numSides = req.params.sides;
    let numDice = req.parans.dice;
    console.log(roll(numSides, numDice, 1));
})

//Endpoint /app/roll/:sides/:dice/:rolls
app.get('app/roll/:sides/:dice/:rolls', (req, res, next) => {
    let numSides = req.params.sides;
    let numDice = req.parans.dice;
    let numRolls = req.params.rolls;
    console.log(roll(numSides, numDice, numRolls));
})