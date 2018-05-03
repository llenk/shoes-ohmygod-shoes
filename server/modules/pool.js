const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'shoe_store', //name of database
    host: 'localhost', //where is database
    port: 5432, //port for database, this is postgres default
    max: 10, //how many connections at one time (10 is heroku free tier)
    idleTimeoutMillis: 30000 //timeout in milliseconds
});

//next couple lines are not NEEDED, but helpful for error messages
pool.on('connect', () => {
    console.log('postgresql connected');
});
pool.on('error', (error) => {
    console.log('postgresql had error', error);
});

module.exports = pool;