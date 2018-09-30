const connectionString = process.env.DATABASE_URL;
const pg = require('pg');
const fetch = require('node-fetch');

exports.getAll = (req, res) => {
  var results = [];
  const client = new pg.Client(connectionString);
  client.connect();
  client.query('SELECT * FROM teams', (err, dbrs) => {
    results = dbrs.rows.map(c => c["abrv"])
    client.end()
    fetch('http://localhost:8080/schedule')
      .then(response => response.json())
      .then(json => {
        res.render('picks',
          {
            schedule: json,
            teams: results,
            title: 'picks'
          }
        )
      })
  })
};

exports.submitPick = (req, res) => {
  console.log(req)
  res.sendStatus(200);
};

