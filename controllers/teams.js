const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pickem';
const pg = require('pg');

exports.getAll = (req, res) => {
    var results = [];
    const client = new pg.Client(connectionString);
    client.connect();
    client.query('SELECT * FROM teams', (err, dbrs) => {
        results = dbrs.rows.map(c => c["abrv"])
        client.end()
        res.render('teams', { teams: results})
    })

};
