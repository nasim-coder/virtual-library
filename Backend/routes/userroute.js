const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/userController')
const acontroller = require('../controllers/adminController')
const verifyToken = require('../middleware/jwt')

//defing routes for users
userRouter.post('/register', controller.signUp);
userRouter.post('/login', controller.login);
userRouter.get('/getbooks/:department/:org_id', verifyToken, acontroller.getBookByDepartment)
userRouter.get('/getallbook/:org_id', verifyToken, acontroller.getAllBook)
userRouter.post('/changepassword', verifyToken, controller.changePassword);
// userRouter.post('/logout', controller.logout);

//exporting route
module.exports = userRouter;