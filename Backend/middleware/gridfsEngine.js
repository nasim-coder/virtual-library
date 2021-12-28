
const mongoose = require('mongoose');

const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto')
const path = require('path')
    
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
    
     const upload = multer({ storage });
     
     module.exports= {upload}