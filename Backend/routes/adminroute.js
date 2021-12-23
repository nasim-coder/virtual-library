const express = require('express');
const Router = express.Router();


Router.post('/admiRegister', controller.signUp);
Router.post('/adminLogin', controller.Login);
Router.post('/addBook', controller.addBook);
Router.post('/deleteBook', controller.DeleteBook);
Router.post('/showBooks', controller.showBooks);
Router.post('/changePassword', controller.changePassword);
Router.post('/logout', controller.logout);
module.exports = Router;
