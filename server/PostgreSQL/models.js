// These functions will handle the queries to search and store data.

// Import the pgPool
var pool = require('./db.js');

var createAccount = async (body) => {
  var {password, username, email} = body;
  var queryString = `INSERT INTO
  users(username, password, email)
  VALUES ('${username}', '${password}', '${email}')`;
  var results = await pool.query(queryString);
  return results;
  pool.end();
};

var addFave = async (body) => {
  var {name, street, city, state, phone, website_url, username} = body;
  var queryString = `INSERT INTO
  favorites(name, street, city, state, phone, website_url, username)
  VALUES ('${name}', '${street}', '${city}', '${state}', '${phone}', '${website_url}', '${username}')`
  var results = await pool.query(queryString);
  return results;
  pool.end();
};

var getFaves = async (body) => {
  var { username } = body;
  var queryString = `SELECT * FROM
  favorites
  WHERE username = '${username}'`
  var results = await pool.query(queryString);
  return results.rows;
  pool.end();
}

module.exports.createAccount = createAccount;
module.exports.addFave = addFave;
module.exports.getFaves = getFaves;