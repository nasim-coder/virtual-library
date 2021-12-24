const express = require('express');
const mongoose = require('mogoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin');
const {connection} = require('../config/mongoConnection');
const Book = require('../model/book');
const jwtconfig = require('../config/jwtconfig')
const {upload} = require('../middleware/gridfsEngine');


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

exports.adminLogin = async (req, res)=>{
    const {email, password} = req.body;
    if(!(email&&password)){
        res.status(400).send("All input is required");
    }
    const admin = await Admin.findOne({ email });
    if(admin && (bcrypt.compare(password, admin.password))){
        const token = jwt.sign({userId: admin._id, email}, jwtconfig.secret, {"expiresIn": "2h"});
        admin.token = token;
        res.status(200).json(user)
    }
    res.status(400).send("invalid credential")
}




module.exports = (upload)=>{

let gfs;
connection.once('open', ()=>{
    gfs = new mongoose.mongo.GridFSBucket(connection.db, {
        bucketName: 'uploads'
    });
});
}


exports.adddBook = upload.single('file'), async (req, res)=>{

let book = new Book({
    name : req.body.name,
    department : req.body.department,
    org_id : req.user.org_id
})
 await book.save((err, book)=>{
     if(err){
        res.status(400).json({msg:err})
        return;
     }
 })
}