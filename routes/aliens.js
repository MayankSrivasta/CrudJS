const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

// async - for async await, so it will not block ur process
// get all api
router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})
 
// get by id api
router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


// post api
router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

// patch api
router.patch('/:id',async(req,res)=> {
    try{

// for delete api u have to just change findById 
        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        
        // instead of using save, u have to use remove()
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


// patch api
router.delete('/:id',async(req,res)=> {
    try{

        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        
        // instead of using save, u have to use remove()
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router