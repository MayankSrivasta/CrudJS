const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ToDoDB'

const app = express()

//  {useNewUrlParser:true} - used in case the url is 
// not deprecated
mongoose.connect(url, {useNewUrlParser:true,
    useUnifiedTopology: true,
});
// below used to get hold of the db connection
const con = mongoose.connection

// below used to open connection
con.on('open', () => {
    console.log('connected...')
})

// it is used to tell express framework that the 
// i will be using json for express framework
app.use(express.json())

// its kind of variable for the given path/file
const toDoRouter = require('./routes/ToDoRoutes')
// for all the "/alients" request, sends the request to alienRouter 
// variable which is defined above
app.use('/todo',toDoRouter)

app.listen(9000, () => {
    console.log('Server started')
})
