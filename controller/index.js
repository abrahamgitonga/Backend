//controleer holds the logic ..fucnctions
const {v4}= require('uuid')
const trainees=[
    {
      id: '0f8f06e4-8e30-446f-8797-f94a055cb25f',
      name:'john doe',
      age: 80
  
    }

  ]

    const getTrainees =(req,res)=>{
        res.status(200).send(trainees)

    }
    //add trainee

    const addTrainee =(req,res)=>{
    const body= req.body
    //const id = `${Math.floor(Math.random()*1233344)}`
    const id =v4()
    //console.log(id)
    const trainee ={id, ...body}
    trainees.push(trainee)
    res.status(201).send({message:'user created'})

    }
    //update trainee

    const updateTrainee= (req,res)=>{
        const {id} = req.params
        const body =req.body;
        const index = trainees.findIndex(t=> t.id===id)
        console.log(index);
        if(index >= 0){
          trainees[index]={id, ...body}
          return res.status(200).json({message:'user updated'})
      
        }else{
          return res.status(400).send({message:'user not found'})
        }

    }

    //delete trainee

    const deleteTrainee = (req,res)=>{
        const {id} = req.params
        const index = trainees.findIndex(t=> t.id===id)
        //console.log(index);
        if(index >= 0){
          trainees.splice(index,1)
          return res.status(200).json({message:'user deleted'})
      
        }else{
          return res.status(400).send({message:'user not found'})
        }

    }

    //single trainee

    const getTrainee = (req,res)=>{
        const {id} =req.params
        const trainee = trainees.find(t=> t.id===id)
        //console.log(trainee)
        if(trainee){
            return  res.status(200).send(trainee)
        }else{
            return res.status(404).send({message:'user not found'})
          
      
        }

    }

    module.exports={
        getTrainees,
        getTrainee,
        addTrainee,
        updateTrainee,
        deleteTrainee,


    }



  
   

  



  //old test code


//   //targets all the records
// //   app.get('/trainee',(req,res)=>{
// //     //res.status(200).send(trainees)
  
// //   })
  
//   // post
//   app.post('/trainee',(req,res)=>{
//     const body= req.body
//     //const id = `${Math.floor(Math.random()*1233344)}`
//     const id =v4()
//     //console.log(id)
//     const trainee ={id, ...body}
//     trainees.push(trainee)
//     res.status(201).send({message:'user created'})
//     console.log(body);
//   })

 //delete
//   app.delete('/trainee/:id', (req,res)=>{
//     const {id} = req.params
//     const index = trainees.findIndex(t=> t.id===id)
//     //console.log(index);
//     if(index >= 0){
//       trainees.splice(index,1)
//       return res.status(200).json({message:'user deleted'})
  
//     }else{
//       return res.status(400).send({message:'user not found'})
//     }
  
//   })

 // update (put and patch work the same way)
//   app.put('/trainee/:id',(req,res)=>{
//     const {id} = req.params
//     const body =req.body;
//     const index = trainees.findIndex(t=> t.id===id)
//     console.log(index);
//     if(index >= 0){
//       trainees[index]={id, ...body}
//       return res.status(200).json({message:'user updated'})
  
//     }else{
//       return res.status(400).send({message:'user not found'})
//     }
//   })

//to get one record
  
//   app.get('/trainee/:id',(req,res)=>{
//     // const param= req.params
//     // console.log(param)
//     const {id} =req.params
//     const trainee = trainees.find(t=> t.id===id)
//     //console.log(trainee)
//     if(trainee){
//         return  res.status(200).send(trainee)
//     }else{
//         return res.status(404).send({message:'user not found'})
      
  
//     }
    
//   })
  