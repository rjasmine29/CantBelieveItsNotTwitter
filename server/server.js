const express = require('express')
const app = express()
const cors = require('cors');

const fs = require('fs')
const file = fs.readFileSync(__dirname + '/data.json')

app.use(express.json())
app.use(cors());

const entry = require('./controllers-routers/routers/routes')
app.use('/entries', entry) 

app.get('/', (req,res) =>{
    res.status(200).send('Server is up and running');
})

app.post('/', (req,res) =>{
    res.status(405).send('We dont do that here')
})

module.exports = app;