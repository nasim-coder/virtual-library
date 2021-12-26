
const mongoose = require('mongoose');

const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto')
const path = require('path')

//creating connection to database to get th instance
const conn = mongoose.createConnection("mongodb://localhost:27017/virtual_lib");
    let gfs;
    //initialize storage
    conn.once("open", () => {
      gfs =new mongoose.mongo.GridFSBucket(conn.db, {bucketName : "uploads"});
    });
    
    //create storage object
    const storage = new GridFsStorage({
      url: "mongodb://localhost:27017/virtual_lib",
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
    
     module.exports = upload = multer({ storage });