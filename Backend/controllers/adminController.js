
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin');
// const {gfs} = require('../middleware/gridfsEngine')
const Book = require('../model/book');
const jwtconfig = require('../config/jwtconfig')

const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto')
const path = require('path')

// console.log(gfs)

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
        org_id: org_id,
        fileId: req.file.id
    })
    book.save((err, book)=>{
        if(err){
            res.status(400).json({msg: err})
        }else{
            res.status(200).json(book)
        }
    })
  }


//initializing gridfs storage
  let gfs;
  mongoose.connection.once("open", () => {
      gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName : "uploads"});
  });
//retrieve all books
  exports.showBooks = async (req, res) => {
    await gfs.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(200).json({
                success: false,
                message: 'No files available'
            });
          }
          res.status(200).json({
            success: true,
            files,
        });
        
    });
};

//reading the file in browser
  exports.readBook = async (req, res)=>{
      let id = req.params.id;
      console.log(id);
      let o_id = mongoose.Types.ObjectId(id);
      await gfs.find({_id : o_id})
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404).json({
            err: "no files exist"
          });
        }
        gfs.openDownloadStream(o_id).pipe(res)
      });
  }
  //downloading a file/book

  exports.downloadBook = (req, res) => {
      let id = req.params.id;
      let o_id = mongoose.Types.ObjectId(id);
      gfs.find({_id:o_id})
      .toArray((err, files) => {
        if(!files || files.length===0){
            return res.status(400).json({
                err : "no files found"
            })
        }
        if(err){
            return res.status(400).json({msg: err})
        }
        res.set('content-Disposition', 'attachment; filename="' + files[0].filename + '"')
        gfs.openDownloadStream(o_id).pipe(res)
      });
  }

  //deleting a file/book from uploads
  exports.deleteBook = (req, res) => {
      let id = req.params.id;
      let o_id = mongoose.Types.ObjectId(id);
      gfs.delete(o_id, (err)=>{
        if(err){
            return res.status(404).json({msg: err})
        }
        res.status(200).json({msg: 'book removed successfully'})
      })
  }

  exports.getBookByDepartment = (req, res) => {
      department = req.params.department
      Book.find({}, {department: department}, (err, book)=>{
          if(err){
              res.status(400).json('something went wrong')
          }
          res.status(200).json(book)
      })
  }