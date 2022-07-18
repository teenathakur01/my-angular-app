const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose');
const db = "mongodb+srv://teena:teena@eventsdb.ktlkblz.mongodb.net/?retryWrites=true&w=majority"; //connected to database

//setting up mongoose
mongoose.connect(db, function(err){
  if(err){
      console.error('Error! ' + err)
  } else {
    console.log('Connected to mongodb')      
  }
});

router.get('/', (req,res) => {
  res.send('From api route')
})

//resigration api
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      res.status(200).send(registeredUser)
    }
  })
})

//login api
router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        res.status(200).send(user)
      }
    }
  })
})

//events api
router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    }
  ]
  res.json(events)
})

router.get('/special', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    },
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-15-1"
    }
  ]
  res.json(events)
})

module.exports = router