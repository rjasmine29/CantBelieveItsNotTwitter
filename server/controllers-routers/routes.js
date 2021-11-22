const express = require('express')
const router = express.Router()

const Entry = require('../models/entries');

//reads stuff from the file syncronously
const fs = require('fs')
const file = fs.readFileSync(__dirname + '/../data.json');
const data = JSON.parse(file);

const sample = {
    "title": "sample",
    "message": "yadayda",
    "likes": 1,
    "dislikes": 6,
    "emoji": 7,
    "gifUrl": "www.brum.com",
    "reply": "nothing"
}
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
                //console.log('hello')
                res.send('hello')
            })
            .post((req,res) => {
    const newEntry = Entry.create(sample);
    res.status(201).send(newEntry)
})

// //get sepcific tweet
// router.get('/:title', (req,res) =>{
//     const title = req.params.title;
//     console.log(title)
//     const selectedTweet = Entry.findByTitle(title)
//     res.send(title);
// })

module.exports = router;