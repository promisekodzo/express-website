const express = require('express')

const server = express();

const handleAllTypesOfRequests = (req,res) => {
    res.send("Response from server.use");
}

const handlePutProfileRequest = (req,res) => {
    res.send("Put request responded to");
}

const handleGetRequest = (req,res)  => {
    res.send("welcome to login page");
}

const handlePutSignUp = (req,res) => {
    res.send("welcome to signup page");
}

server.post('/profile', handleAllTypesOfRequests)
server.get('/login', handleGetRequest)
server.put('/profile', handlePutProfileRequest);
server.get('/signup', handlePutSignUp)
server.listen(3000,  ()=> console.log('server is ready'));