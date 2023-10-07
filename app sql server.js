///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////// DB Connection 
/////////////// 1) SQL Server
//////////// 2) Postgresql

////////// ***  IN ORDER TO RUN IT WE SHOULD CHANGE ITS NAME FROM "app sql server.js" to "app.js"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// 1) SQL Server
////////////////////


// const express = require('express');
// const sql = require('mssql');
// // const bodyParser = require('body-parser');
// console.log('app')
// const app = express();
// // Middleware that is used to parse incoming JSON data from HTTP request bodies eg req.body.
// // JSON data to javascript object
// // app.use(express.json());
// ///////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////// MTHEOD 1
// const dbConfig = {
//     // user: 'JILANI\gulam',
//     // server: 'localhost',     // SQL Server hostname
//     server: 'http://1127.0.0.1',     // SQL Server hostname
//     // server: 'localhost\SQLEXPRESS',     // SQL Server hostname
//     database: 'nodejsdb',
//     // driver: "msnodesqlv10",
//     // requestTimeout: 60000,

//     // user: 'YourUsername',  // Not required because i am using windows authentication in ssms.
//     // password: 'YourPassword',
//     options: {
//       // encrypt: true,         // Encrypt data if using Azure SQL
//       trustServerCertificate: true, // Don't trust self-signed certificates (set to true for development)
//       enableArithAbort: true
//     }
//   };
// async function connectToDatabase() {
//     try {
//      console.log('sql.connect... ')
//       await sql.connect(dbConfig);
//       console.log('Connected to SQL Server database with Windows Authentication');
//     } catch (err) {
//       console.error('Error connecting to the database:', err);
//     }
//   }
  
//   // Call the function to connect
//   connectToDatabase();


///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// MTHEOD 2


// const config = {
//   user: 'JILANI\gulam',
//   // password: 'your_password',
//   // server: 'localhost',     // SQL Server hostname
//   // server: 'http://1127.0.0.1',     // SQL Server hostname
//     server: 'localhost\SQLEXPRESS',     // SQL Server hostname
//     database: 'nodejsdb',
// };

// // Create a connection pool
// const pool = new sql.ConnectionPool(config);

// pool.connect().then(() => {
//   console.log('Connected to SQL Server');
// }).catch((err) => {
//   console.error('Error connecting to SQL Server:', err);
// });



// Listening to incoming request
// const port = 1433;
// app.listen(port, ()=>{
//     console.log(`App running on port ${port}`)
// });

// module.exports = app;


