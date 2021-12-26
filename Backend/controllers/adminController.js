
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin');

const Book = require('../model/book');
const jwtconfig = require('../config/jwtconfig')

const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto')
const path = require('path')



// signup for admin only
exports.signUp = async (req, res)=>{
    let admin = new Admin({
        name:req.body.name,
        email: req.body.email,
        // password: bcrypt.hashSync(req.body.password, 8),
        password: req.body.password,
        org_id: req.body.org_id
    });

    await admin.save((err, admin)=>{
        if(err){
            res.status(400).json({msg:err})
            return;
        }else{
            res.status(200).json(admin)
        } 
    }
    );    
}
//login function for admin only
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



//fuction to upload file and book data
exports.addBook = (req, res)=>{
  
    const {name, department, org_id} = req.body;
    const book = new Book({
        name:name,
        department: department,
        org_id: org_id
    })
    book.save((err, book)=>{
        if(err){
            res.status(400).json({msg: err})
        }else{
            res.status(200).json(book)
        }
    })
    
    
  }

  