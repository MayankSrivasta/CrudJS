const express = require('express')
const router = express.Router()
const ToDoObject = require('../models/ToDoModel')

// async - for async await, so it will not block ur process
// get all api
router.get('/', async(req,res) => {
    try{
           const object = await ToDoObject.find()
           res.json(object)
    }catch(err){
        res.send('Error ' + err)
    }
})
 
// get by id api
router.get('/:id', async(req,res) => {
    try{
           const object = await ToDoObject.findById(req.params.id)
           res.json(object)
    }catch(err){
        res.send('Error ' + err)
    }
})


// post api
router.post('/', async(req,res) => {
    const object = new ToDoObject({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    })

    try{
        const a1 =  await object.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

// patch api
router.patch('/:id',async(req,res)=> {
    try{
        const object = await ToDoObject.findById(req.params.id) 
        object.status = req.body.status
        
        // instead of using save, u have to use remove()
        const a1 = await object.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


// patch api
router.delete('/:id',async(req,res)=> {
    try{

        const object = await ToDoObject.findById(req.params.id) 
        
        // instead of using save, u have to use remove()
        const a1 = await object.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router