const express = require('express')
const app = express()
const cors = require('cors');

<<<<<<< HEAD
const fs = require('fs')
const file = fs.readFileSync(__dirname + '/data.json')
=======
>>>>>>> 9a447f1cb0574a21f61b6ba7cfe942e498e7ea02

app.use(express.json())
app.use(cors());

<<<<<<< HEAD
const entry = require('./controllers-routers/routers/routes')
=======
const entry = require('./controllers-routers/routes')
>>>>>>> 9a447f1cb0574a21f61b6ba7cfe942e498e7ea02
app.use('/entries', entry) 

app.get('/', (req,res) =>{
    res.status(200).send('Server is up and running');
})

app.post('/', (req,res) =>{
    res.status(405).send('We dont do that here')
})

module.exports = app;