const sql = require('mssql')
const express = require('express')
const {v4}= require('uuid')
const app = express()
//body parser
app.use(express.json())

const trainees=[
  {
    id: '0f8f06e4-8e30-446f-8797-f94a055cb25f',
    name:'john doe',
    age: 80

  }
]
//targets all the records
app.get('/trainee',(req,res)=>{
  res.status(200).send(trainees)

})

// post
app.post('/trainee',(req,res)=>{
  const body= req.body
  //const id = `${Math.floor(Math.random()*1233344)}`
  const id =v4()
  //console.log(id)
  const trainee ={id, ...body}
  trainees.push(trainee)
  res.status(201).send({message:'user created'})
  console.log(body);
})

//to get one record

app.get('/trainee/:id',(req,res)=>{
  // const param= req.params
  // console.log(param)
  const {id} =req.params
  const trainee = trainees.find(t=> t.id===id)
  //console.log(trainee)
  if(trainee){
      return  res.status(200).send(trainee)
  }else{
      return res.status(404).send({message:'user not found'})
    

  }
  
})
// update
app.put('/trainee/:id',(req,res)=>{
  const {id} = req.params
  const index = trainees.findIndex(t=> t.id===id)
  console.log(index);
  // if(trainee){
  //   return res.status(200).send(trainee)

  // }else{
  //   return res.status(400).send({message:'user not found'})
  // }
})





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