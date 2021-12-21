const express = require("express");
const User = require('../model/user')
const bcrypt = require('bcryptjs')

exports.register = (req, res)=>{
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
    
}
