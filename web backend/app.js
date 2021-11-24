//Importing Express
const express = require('express');

// Initializing Express 
const app = express();

const signUp = require('./Signup');

//Importing Body-Parser
app.use(express.json());

//Home Route
app.use('/Usersignup', (req,res,next)=>{
    const {fname,lname,password,retype} = req.body;
    signUp.create({
        fname:fname,
        lname:lname,
        password:password,
        retype:retype
    });
});

app.listen(5000);