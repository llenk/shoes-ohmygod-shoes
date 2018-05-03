const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('./modules/pool');

const app = express();
const port = process.env.PORT || 5000;
const Pool = pg.Pool;
app.use(bodyParser.json());

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

app.delete('/shoe', function(req, res) {
    pool.query(`DELETE FROM "shoes" 
        WHERE "id" = $1;`, [req.query.id])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

app.put('/shoe', function(req, res) {
    pool.query(`UPDATE "shoes" 
        SET ("name", "cost") = ($1, $2) 
        WHERE "id" = $3;`, 
        [req.body.name, req.body.cost, req.body.id])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('listening on port', port);
});