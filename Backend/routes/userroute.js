const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/userController')
const acontroller = require('../controllers/adminController')
const verifyToken = require('../middleware/jwt')

userRouter.post('/register', controller.signUp);
userRouter.post('/login', controller.login);
userRouter.get('/getbooks/:department/:org_id', verifyToken, acontroller.getBookByDepartment)
userRouter.get('/getallbook/:org_id', verifyToken, acontroller.getAllBook)
// userRouter.post('/changepassword', controller.changePassword);
// userRouter.post('/logout', controller.logout);


module.exports=userRouter;