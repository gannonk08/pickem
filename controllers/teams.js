const connectionString = process.env.DATABASE_URL;
const pg = require('pg');

exports.getAll = (req, res) => {
  var results = [];
  const client = new pg.Client(connectionString);
  client.connect();
  client.query('SELECT * FROM teams', (err, dbrs) => {
    results = dbrs.rows.map(c => c["abrv"])
    client.end()
    res.render('picks',
      {
        teams: results,
        title: 'picks'
      }
    )
  })
};

exports.submitPick = (req, res) => {
  console.log(req)
  res.sendStatus(200);
};

