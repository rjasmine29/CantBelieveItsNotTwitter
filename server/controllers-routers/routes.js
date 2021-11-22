const express = require('express')
const router = express.Router()

const Entry = require('../models/entries');

//reads stuff from the file syncronously
const path = __dirname + '/../data.json'
const fs = require('fs')
const file = fs.readFileSync(path, 'utf8');
const data = JSON.parse(file);
console.log(path)

let sample = {
    id: 'John Doe',
    title: 'john.doe@example.com',
    message: 27,
    image: 'Male',
};
//
router.route('/')
      .get((req,res) =>{
          const entryData = data;
          res.send(entryData);
      })
      .post((req,res) => {
          const data = sample;
          const newEntry = Entry.create(data);
          res.status(201).send(newEntry)
      })
      .delete((req,res) =>{
          res.status().send();
      })

      router.route('/create')
            .get((req,res) =>{
                const newEntry = Entry.create(sample); //change sample to req.body
                fs.writeFile(path, JSON.stringify(newEntry,null,4), 'utf8', err =>{
                    if(err){
                        console.log('error');
                    }else{
                        console.log('data saved')
                    }
                }) 
                res.send(newEntry)
            })
            .post((req,res) => {                
                res.status(201).send(newEntry)
})

module.exports = router;