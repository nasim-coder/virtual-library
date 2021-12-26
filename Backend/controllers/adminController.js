// const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin');
// const {connection} = require('../config/mongoConnection');
// const {connection} = require('../server')
const Book = require('../model/book');
const jwtconfig = require('../config/jwtconfig')
const upload = require('../middleware/gridfsEngine');

//creating connection to database to get th instance
const conn = mongoose.createConnection("mongodb://localhost:27017/test");
    let gfs;
    //initialize storage
    conn.once("open", () => {
      gfs =new mongoose.mongo.GridFSBucket(conn.db, {bucketName : "uploads"});
    });
    
    //create storage object
    const storage = new GridFsStorage({
      url: "mongodb://localhost:27017/test",
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            const filename = buf.toString("hex") + path.extname(file.originalname);
            const originalFileName = file.originalname;
            const fileInfo = {
              filename: filename,
              bucketName: "uploads",
            };
            resolve(fileInfo);
          });
        });
      },
    });
    const upload = multer({ storage });

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
exports.addBook = upload.single('file'), async (req, res)=>{

let book = new Book({
    name : req.body.name,
    department : req.body.department,
    org_id : req.user.org_id
})
 await book.save((err, book)=>{
     if(err){
        res.status(400).json({msg:err})
        return;
     }else{
         res.status(200).json(book)
     }
 })
}