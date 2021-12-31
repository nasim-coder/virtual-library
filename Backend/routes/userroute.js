const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/userController')
const acontroller = require('../controllers/adminController')

userRouter.post('/register', controller.signUp);
userRouter.post('/login', controller.login);
// userRouter.get('/books', controller.showBooks);
// userRouter.post('/changepassword', controller.changePassword);
// userRouter.post('/logout', controller.logout);
userRouter.get('/getbooks/:department/:org_id', acontroller.getBookByDepartment)
adminrouter.get('/getallbook/:org_id', acontroller.getAllBook)

module.exports=userRouter;