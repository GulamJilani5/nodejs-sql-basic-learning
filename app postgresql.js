///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////// DB Connection 
/////////////// 1) SQL Server
//////////// 2) Postgresql



////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// 2) Postgresql
////////////
/*
const express = require('express');
console.log('app')
const app = express();
*/
// Middleware that is used to parse incoming JSON data from HTTP request bodies eg req.body.
// JSON data to javascript object
// app.use(express.json());
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// db connection
/*
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost', // e.g., 'localhost'
  database: 'nodejsdb',
  // database: 'postgres',
  password: 'Postgr_SQL@12',
  port: 5432, // PostgreSQL default port
});
*/

// Connect to the database
/*
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });
*/

  ///// INSERT QUERY
  /*
  const newRecord = {
    user_id : 1,
    username : 'john',
    email : 'john@gmail.com',
    date : '05/10/2023',
    mobile_number : 8576762862
  };
  
  client.query('INSERT INTO users(user_id, username, email, date, mobile_number) VALUES($1, $2, $3, $4, $5)', [newRecord.user_id, newRecord.username,newRecord.email,newRecord.date,newRecord.mobile_number,], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully');
    }
  });
  */

  ///// QUERY/Search/Select data(records)
  /*
  client.query('SELECT * FROM Users', (err, result) => {
    if (err) {
      console.error('Error executing query...: ', err);
    } else {
      console.log('Query result:', result.rows);
    }
  });
  */


// Listening to incoming request
/*
const port = 1433;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
});
module.exports = app;
*/


