const adminrouter = require('express').Router();
const controller = require('../controllers/adminController');
const { upload } = require('../middleware/gridfsEngine');
let veryfytoken = require('../middleware/jwt');

//defining routes for admin
adminrouter.post('/adminRegister', controller.signUp);
adminrouter.post('/adminLogin', controller.adminLogin);
adminrouter.post('/addBook', upload.single('file'), controller.addBook);
adminrouter.get('/showBooks', controller.showBooks);
adminrouter.get('/readBook/:id', controller.readBook);
adminrouter.get('/downloadBook/:id', controller.downloadBook)
adminrouter.get('/deleteBook/:id', controller.deleteBook);
adminrouter.get('/getBookbyDepartment/:department/:org_id', controller.getBookByDepartment)
adminrouter.get('/getallbook/:org_id', controller.getAllBook);
adminrouter.post('/addNotice/', controller.addNotice)
adminrouter.post('/changePassword', controller.changePassword);
adminrouter.post('/forgotPassword', controller.forgotPassword)
//adminrouter.post('/logout', controller.logout);

// exporting route
module.exports = adminrouter;
