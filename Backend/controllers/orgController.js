const mongoose = require('mongoose')
const Organisation = require('../model/organization');

//creating organisation in database
exports.createOrg = (req, res) => {
    let org = new Organisation({
        name: req.body.name,
        org_id: req.body.org_id
    });
    console.log(req);
    org.save((err, org) => {
        if (err) {
            res.status(400).json({ msg: err })
        } else {
            res.status(200).json({ status: "success", org })
        }
    });
}

//deleting organisation from database
exports.deleteOrg = (req, res) => {
    let org_id = parseInt(req.params.id);
    console.log(typeof org_id);
    Organisation.remove({ org_id }, (err) => {
        if (err) {
            return res.status(404).json({ msg: err })
        }
        res.status(200).json({ msg: 'org deleted successfully' })
    })
}