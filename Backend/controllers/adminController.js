const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtconfig = require('../config/jwtconfig')
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto')
const path = require('path')
const Admin = require('../model/admin');
const Book = require('../model/book');
const Notification = require('../model/notification');
const notification = require('../model/notification');

// signup for admin only
exports.signUp = async (req, res) => {
    let admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        // password: req.body.password,
        org_id: req.body.org_id
    });

    await admin.save((err, admin) => {
        if (err) {
            res.status(400).json({ msg: err })
            return;
        } else {
            res.status(200).json(admin)
        }
    }
    );
}

//login function for admin only
exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send("All input is required");
    }
    const admin = await Admin.findOne({ email });
    if (admin && (bcrypt.compare(password, admin.password))) {
        const token = jwt.sign({ userId: admin._id, email }, jwtconfig.secret, { "expiresIn": "2h" });
        admin.token = token;
        res.status(200).json(user)
    }
    res.status(400).send("invalid credential")
}

//change password
exports.changePassword = async (req, res) => {
    let newPassword = bcrypt.hashSync(req.body.newPassword, 8);
    let id = mongoose.Types.ObjectId(req.body.id);
    await Admin.findByIdAndUpdate(id, { password: newPassword }, (err, data) => {
        if (err) {
            res.status(400).json({success: false, msg: err})
        } else {
            res.status(200).json({success:true, msg: "updated successfully"})
        }
    })
}

//function for forgot password
exports.forgotPassword = (req, res) => {
    let email = req.body.email;
     let usermail = Admin.find({ email : email}, (err, email) => {
        if (err) {
            res.status(400).json({ success: false, msg: err})
        } 
     })
     let randomPassword = Math.random().toString(36).slice(-8);
       
    console.log(randomPassword);
    console.log(usermail.password);
    res.status(200).json({success: true})
}

//fuction to upload file and book data
exports.addBook = async (req, res) => {

    const { name, department, org_id } = req.body;
    const book = new Book({
        name: name,
        department: department,
        org_id: org_id,
        fileId: req.file.id
    })
    await book.save((err, book) => {
        if (err) {
            res.status(400).json({ msg: err })
        } else {
            res.status(200).json(book)
        }
    })
}

//initializing gridfs storage
let gfs;
mongoose.connection.once("open", () => {
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: "uploads" });
});

//retrieve all books/actual file
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
exports.readBook = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let o_id = mongoose.Types.ObjectId(id);
    await gfs.find({ _id: o_id })
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
exports.downloadBook = async (req, res) => {
    let id = req.params.id;
    let o_id = mongoose.Types.ObjectId(id);
   await gfs.find({ _id: o_id })
        .toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(400).json({
                    err: "no files found"
                })
            }
            if (err) {
                return res.status(400).json({ msg: err })
            }
            res.set('content-Disposition', 'attachment; filename="' + files[0].filename + '"')
            gfs.openDownloadStream(o_id).pipe(res)
        });
}

//deleting a file/book from uploads
exports.deleteBook = async (req, res) => {
    let id = req.params.id;
    let o_id = mongoose.Types.ObjectId(id);
    await gfs.delete(o_id, (err) => {
        if (err) {
            return res.status(404).json({ msg: err })
        }
        res.status(200).json({ msg: 'book removed successfully' })
    })
}

//get all book by using department and org_id
//get all book of particular org and particular depatment
exports.getBookByDepartment = async (req, res) => {
    department = req.params.department;
    org_id = req.params.org_id;
    await Book.find({ and: [{ department: department }, { org_id: org_id }] }, (err, book) => {
        if (err) {
            res.status(400).json('something went wrong')
        }
        res.status(200).json(book)
    })
}

//get all the books irrespective of department of particular org
exports.getAllBook = async (req, res) => {
    org_id = req.params.org_id;
    await Book.find({ org_id: org_id }, (err, book) => {
        if (err) {
            res.status(400).json({ 'something went wrong': err })
        }
        res.status(200).json(book)
    })
}

//function to add notice
exports.addNotice = async (req, res) => {
    notification = new Notification({
        message: req.body.message,
        org_id: req.body.org_id
    })
    await notification.save((err, notification) => {
        if (err) {
            res.status(400).json({msg: err})
        }else {
           res.status(200).json({"notice added": notification}) 
        }
    })
}

