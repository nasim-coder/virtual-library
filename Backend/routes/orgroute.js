const orgRouter = require('express').Router();
const controller = require('../controllers/orgController')

//for superuser use only
orgRouter.post('/create/organisation', controller.createOrg);
orgRouter.get('/delete/org/:id', controller.deleteOrg);

//exporting route
module.exports = orgRouter;