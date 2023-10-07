/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////
const app = require('./app');

// require('dotenv').config();
// Nice way to destructuring the value from the .env file
// const {USER_POSTGRESQL,HOST_POSTGRESQL,DATABASE_POSTGRESQL,PASSWORD_POSTGRESQL,PORT_POSTGRESQL} = process.env;
// console.log(USER_POSTGRESQL, HOST_POSTGRESQL,DATABASE_POSTGRESQL,PASSWORD_POSTGRESQL,PORT_POSTGRESQL)

//  // Middleware 
//   app.use('/api/v1/tours', router);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// 
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost', // e.g., 'localhost'
  database: 'nodejsdb',
  // database: 'postgres',
  password: 'Postgr_SQL@12',
  port: 5432, // PostgreSQL default port
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });


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
  client.query('SELECT * FROM Users', (err, result) => {
    if (err) {
      console.error('Error executing query...: ', err);
    } else {
      console.log('Query result:', result.rows);
    }
  });

///// Listening to incoming request, Start the Express server
const port = 5432; // postgresql
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
    // console.log('Connection string: ',DBConnectionString)
})