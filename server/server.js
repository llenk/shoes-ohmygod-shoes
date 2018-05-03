const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 5000;
const Pool = pg.Pool;
app.use(bodyParser.json());

const pool = new Pool({
    database: 'shoe_store', //name of database
    host: 'localhost', //where is database
    port: 5432, //port for database, this is postgres default
    max: 10, //how many connections at one time (10 is heroku free tier)
    idleTimeoutMillis: 30000 //timeout in milliseconds
});

//next couple lines are NEEDED, but helpful for error messages
pool.on('connect', () => {
    console.log('postgresql connected');
});
pool.on('error', (error) => {
    console.log('postgresql had error', error);
});

let shoes = [
    {
        name: 'clown shoes',
        cost: 100
    },
    {
        name: 'baby shoes, never worn',
        cost: 2
    }
];

app.get('/shoe', function(req, res) {
    pool.query(`SELECT * FROM "shoes";`)
    .then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

app.post('/shoe', function(req, res) {
    pool.query(`INSERT INTO "shoes" ("name", "cost")
        VALUES ($1, $2);`, [req.body.name, req.body.cost])
        .then((results)=> {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('listening on port', port);
});