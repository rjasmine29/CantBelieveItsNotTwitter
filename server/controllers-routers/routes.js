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
      .post((req,res) =>{
        const newEntry = Entry.create(req.body); //change sample to req.body
        fs.writeFile(path, JSON.stringify(newEntry,null,4), 'utf8', err =>{
            if(err){
                console.log('error');
            }else{
                console.log('data saved')
            }
        }) 
        res.send(newEntry)
      })

//updates the db with new entries
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
    //need to change get to post once we merge with frontend
    .post((req,res) => {                
        res.status(201).send(newEntry)
})
router.route('/:id/add')
    .get((req,res) =>{
        const id = Number(req.params.id);
        const comment = com;
        const entry = Entry.findById(id);
        const updated = Entry.addReply(entry,comment)
        fs.writeFile(path, JSON.stringify(updated,null,4), 'utf8', err =>{
            if(err){
                console.log('error');
            }else{
                console.log('data saved')
            }
        }) 
        res.send(updated)
    })

//update db 
router.route('/:id')
        .get((req,res) =>{
            const id = Number(req.params.id); //gets the id
            const entry = Entry.findById(id);
            res.send(entry)
        })
router.route('/:id/:react')
    .get((req,res) =>{
        const id = Number(req.params.id); //gets the id
        const react = req.params.react; //gets the reaction
        console.log(id,typeof(react))
        //find entry by id and then modify reaction
        const entry = Entry.findById(id);
        const updated = Entry.changeNumberOf(entry, react)
        //write to file again
        fs.writeFile(path, JSON.stringify(updated,null,4), 'utf8', err =>{
            if(err){
                console.log('error');
            }else{
                console.log('data saved')
            }
        }) 
        res.send(entry)
    })

const com = 'hello t here'




//get sepcific tweet
//mutliple word title not working -fix later
router.get('/:title', (req,res) =>{
    const title = req.params.title;
    console.log(title)
    const selectedTweet = Entry.findByTitle(title)
    res.send(selectedTweet);
})

module.exports = router;