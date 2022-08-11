const express = require('express');
const jwt = require('jsonwebtoken');
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

//to verify token
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]  // array with string bearer in 0th index and actual token in first index
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

//resigration api
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload,'secretKey')
      res.status(200).send({token})
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
        let payload = {subject: user._id}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
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
      "date": "2022-05-1"
    },
    {
      "_id": "2",
      "name": "Angular",
      "description": "Component",
      "date": "2022-05-1"
    },
    {
      "_id": "3",
      "name": "Angular",
      "description": "Services",
      "date": "2022-05-1"
    },
    {
      "_id": "4",
      "name": "Angular",
      "description": "Pipes",
      "date": "2022-05-1"
    },
    {
      "_id": "5",
      "name": "Angular",
      "description": "Routes",
      "date": "2022-05-1"
    },
    {
      "_id": "6",
      "name": "Angular",
      "description": "Binding",
      "date": "2022-05-1"
    },
    {
      "_id": "7",
      "name": "Angular",
      "description": "Directives",
      "date": "2022-05-1"
    },
    {
      "_id": "8",
      "name": "Angular",
      "description": "Authentication",
      "date": "2022-05-1"
    },
    {
      "_id": "9",
      "name": "Angular",
      "description": "Interaction",
      "date": "2022-05-1"
    }
  ]
  res.json(events)
})

router.get('/special-events',verifyToken,(req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular",
      "description": "Material",
      "date": "2022-05-1"
    },
    {
      "_id": "2",
      "name": "Angular",
      "description": "Component",
      "date": "2022-05-1"
    },
    {
      "_id": "3",
      "name": "Angular",
      "description": "Services",
      "date": "2022-05-1"
    },
    {
      "_id": "4",
      "name": "Angular",
      "description": "Pipes",
      "date": "2022-05-1"
    },
    {
      "_id": "5",
      "name": "Angular",
      "description": "Routes",
      "date": "2022-05-1"
    },
    {
      "_id": "6",
      "name": "Angular",
      "description": "Binding",
      "date": "2022-05-1"
    },
    {
      "_id": "7",
      "name": "Angular",
      "description": "Directives",
      "date": "2022-05-1"
    },
    {
      "_id": "8",
      "name": "Angular",
      "description": "Authentication",
      "date": "2022-05-1"
    },
    {
      "_id": "9",
      "name": "Angular",
      "description": "Interaction",
      "date": "2022-05-1"
    }
  ]
  res.json(events)
})

router.get('/employee-list', (req,res) => {
  let events = [
    {
      "name": "Andrew", 
      "subject":"Angular-Component",
      "experience":"12"
    },
    {
      "name": "Brandon", 
      "subject":"Angular-Services",
      "experience":"14"
    },
    {
      "name": "Christina",
      "subject":"Angular-Pipes",
      "experience":"12"
    },
    {
      "name": "Elena", 
      "subject":"Angular-Routes",
      "experience":"15"
    },
    {
      "name": "Felicia", 
      "subject":"Angular-Binding",
      "experience":"16"

    },   
    {
      "name": "Jaime", 
      "subject":"Angular-Interaction",
      "experience":"13"

    },  
    {
      "name": "Cersie", 
      "subject":"Angular-Directives",
      "experience":"15"

    }, 
    {
      "name": "John", 
      "subject":"Angular-Authentication",
      "experience":"18"

    },  
    {
      "name": "Sansa", 
      "subject":"Angular-Material",
      "experience":"10"

    }   
  ]
  res.json(events)
})


module.exports = router