// connecting to logic

const {Router}=  require('express')
const {getTrainees, addTrainee, getTrainee, deleteTrainee, updateTrainee } =require('../controller') 

const router =Router()

router.get('/', getTrainees)
router.post('/',addTrainee)
router.get('/:id',getTrainee)
router.delete('/:id',deleteTrainee)
router.put('/:id',updateTrainee) 

module.exports= router
