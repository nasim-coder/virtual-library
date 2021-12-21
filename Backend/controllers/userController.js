const express = require("express");
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = require('../config/jwtconfig')

exports.signUp = (req, res)=>{
    let user = new User({
        name:req.body.name,
        email: req.body.email,
        org_id: req.body.org_id,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err, user)=>{
        if(err){
            res.status('500').send({message: err})
            return
        }
    });
    
};

exports.login = async (req, res)=>{
    const {email, password} = req.body;
    if(!(email&&password)){
        res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    if(user && (bcrypt.compare(password, user.password))){
        const token = jwt.sign({userId: user._id, email}, secretKey, {"expiresIn": "2h"});
        user.token = token;
        res.status(200).json(user)
    }
    res.status(400).send("invalid credential")
}
