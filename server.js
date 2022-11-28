import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express()

const args = minimist(process.argv.slice(2))

const port = args.port || 5000

app.listen(port, () => {
	console.log("Server listening on port " + port + ".")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
    res.status(200);
}) 

//Endpoint /app/roll
app.post('/app/roll', (req, res, next) => {
    console.log(roll(6, 2, 1));
})

//Endpoint /app/roll/:sides/
app.get('app/roll/:sides', (req, res, next) => {
    let numSides = req.params.sides;
    console.log(roll(numSides, 2, 1));
})

//Endpoint /app/roll/:sides/:dice/
app.post('app/roll/:sides/:dice/', (req, res, next) => {
    let numSides = req.params.sides;
    let numDice = req.params.dice;
    console.log(roll(numSides, numDice, 1));
})

//Endpoint /app/roll/:sides/:dice/:rolls
app.post('app/roll/:sides/:dice/:rolls', (req, res, next) => {
    let numSides = req.params.sides;
    let numDice = req.params.dice;
    let numRolls = req.params.rolls;
    console.log(roll(numSides, numDice, numRolls));
})