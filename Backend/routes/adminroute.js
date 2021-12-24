
    const adminrouter = require('express').Router();
    //const adminrouter = express.Router();
    const controller = require('../controllers/adminController');
    
    adminrouter.post('/admiRegister', controller.signUp);
    adminrouter.post('/adminLogin', controller.adminLogin);
    adminrouter.post('/addBook', controller.addBook);
    //adminrouter.post('/deleteBook', (req, res)=>{controller.DeleteBook});
    //adminrouter.post('/showBooks', (req, res)=>{controller.showBooks});
    //adminrouter.post('/changePassword', (req, res)=>{controller.changePassword});
    //adminrouter.post('/logout', controller.logout);
    

 module.exports = adminrouter;
