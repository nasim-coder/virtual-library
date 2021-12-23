const methodOverride = require('method-override');
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');
const config = require('../config/mongoConnection')
const crypto = require('crypto-js')
const path = require('path')

//create storage engine
const storage = new GridFSStorage({
    url:config.CONNECTION_URL,
    file:(req, file)=>{
        return new Promise((resolve, reject)=>{
            crypto.randomBytes(16, (err, buf)=>{
                if(err){
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename : filename,
                    bucketName :'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({storage})