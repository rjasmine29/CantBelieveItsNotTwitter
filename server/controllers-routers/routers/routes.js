const express = require('express')
const router = express.Router()

const entry = require('../models/entries');

//
router.route('/')
      .get((req,res) =>{
          const entryData = entry.all;
          res.send(entryData);
      })
      .post((req,res) => {
          const data = req.body;
          const newEntry = entry.create(data);
          res.status(201).send(newEntry)
      })
      .delete((req,res) =>{
          res.status().send();
      })

//get sepcific tweet
router.get('/:title', (req,res) =>{
    const title = req.params.title;
    const selectedTweet = entry.findByTitle(title)
    res.send(selectedTweet);
})