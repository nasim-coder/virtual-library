const express = require('express');
const Router = express.Router();
const controller = require('../controllers/userController')

Router.post('/register', controller.signUp);
Router.post('/login', controller.login);
Router.get('/books', controller.showBooks);
Router.post('/chagepassword', controller.changePassword);
Router.post('/logout', controller.logout);