const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

function globalerateLimmter(req,res,next){
  // console.log(numberOfRequestsForUser);

  let key=req.headers['user-id'];
  // console.log(key);
  // numberOfRequestsForUser[key]=1;
  // console.log(numberOfRequestsForUser);
  // console.log(numberOfRequestsForUser[key]);

    if(numberOfRequestsForUser[key]>=5){
      res.status(404).json({"msg":"not allowed"})
    }else{
      if(!numberOfRequestsForUser[key]){
        numberOfRequestsForUser[key]=1
      }else{
        numberOfRequestsForUser[key]++;
      }
      
      next();
    }
    // console.log(numberOfRequestsForUser);

    
}

app.use(globalerateLimmter)

app.get('/user', function(req, res) {
  
  // console.log(req.headers['user-id']);
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// np 
module.exports = app;