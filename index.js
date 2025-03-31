import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

db.connect();

const result = await db.query("SELECT COUNT(*) FROM pokedex");
const entries = result.rows[0].count;
let currentScore = 0;
let revealAnswer = false;
let randomEntry = Math.floor(Math.random() * entries) + 1;
let entryResult = await db.query("SELECT entry, pokemon FROM pokedex JOIN pokemon ON pokedex.pokemon_id = pokemon.id WHERE pokedex.id = $1;", [randomEntry]);
let currentAnswer = entryResult.rows[0].pokemon;
let checkAnswer = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getNewEntry() {
    revealAnswer = false;
    randomEntry = Math.floor(Math.random() * entries) + 1;
    entryResult = await db.query("SELECT entry, pokemon FROM pokedex JOIN pokemon ON pokedex.pokemon_id = pokemon.id WHERE pokedex.id = $1;", [randomEntry]);
    currentAnswer = entryResult.rows[0].pokemon;
    checkAnswer = "";
}

app.get("/", async (req, res) => {
    res.render("index.ejs", {
        entry: entryResult.rows[0].entry,
        score: currentScore,
        reveal: revealAnswer,
        answer: currentAnswer,
        check: checkAnswer
    });
});

app.post("/submit", async (req, res) => {
    if (req.body.reveal) {
        revealAnswer = true;
        checkAnswer = "";
    } else if (req.body.next) {
        getNewEntry();
    } else if (req.body.answer.trim().toLowerCase() !== currentAnswer.toLowerCase()) {
        checkAnswer = "Incorrect";
    } else if (checkAnswer !== "Correct!") {
        ++currentScore;
        checkAnswer = "Correct!";
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});