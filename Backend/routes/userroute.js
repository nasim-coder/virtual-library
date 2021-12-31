const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/userController')

userRouter.post('/register', controller.signUp);
userRouter.post('/login', controller.login);
// userRouter.get('/books', controller.showBooks);
// userRouter.post('/changepassword', controller.changePassword);
// userRouter.post('/logout', controller.logout);

module.exports=userRouter;