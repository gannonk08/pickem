`CREATE ROLE kgannon WITH LOGIN PASSWORD 'Broncos25!';
CREATE DATABASE pickem;
GRANT ALL PRIVILEGES ON DATABASE pickem TO kgannon;`

Dump local db into prod:

`heroku pg:push pickem DATABASE_URL --app pickem18`