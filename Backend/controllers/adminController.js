const express = require('express');
const mongoose = require('mogoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin');

exports.register = (req, res)=>{
    let admin = new Admin({
        name:req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        org_id: req.body.org_id
    });

    admin.save((err, admin)=>{
        if(err){
            res.status(400).json({msg:err})
            return;
        }
    }
    );

    
}
