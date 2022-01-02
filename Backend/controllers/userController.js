const express = require("express");
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtconfig = require('../config/jwtconfig')

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
        res.status(200).json('you are registered successfully')
    });
    
};

exports.login = async (req, res)=>{
    const {email, password} = req.body;
    if(!(email&&password)){
        res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    let isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(user && (isPasswordCorrect)){
        const token = jwt.sign({user}, jwtconfig.secret, {"expiresIn": "2h"});
        user.token = token;
        res.status(200).json(user)
    }else{
        res.status(400).send("invalid credential")
    }
}
