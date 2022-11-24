const sql = require('mssql')
const express = require('express')
const {v4}= require('uuid')
const app = express()
//body parser
app.use(express.json())
app.listen(4000, ()=>{
  console.log('app is running')
   
})



// const dotenv =require('dotenv')
// dotenv.config()
// const sqlConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME,
//   server: 'localhost',
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
//   options: {
//     encrypt: false, // for azure
//     trustServerCertificate: true // change to true for local dev / self-signed certs
//   }
// }
// sql.connect(sqlConfig).then(pool=>{
//     if(pool.connected){
//         console.log('Connected..');
//     }
// })

// module.exports={sqlConfig}

// async () => {
//  try {
//   // make sure that any items are correctly URL encoded in the connection string
//    const pool=await sql.connect(sqlConfig)
//   const result = pool.request().Query("SELECT * FROM Accounts")
//   console.log(result)
//  } catch (err) {
//   // ... error check
//  }
// }

