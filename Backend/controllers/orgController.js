const mongoose = require('mongoose')
const Organisation = require('../model/organization');

exports.createOrg = (req, res) => {
    let org = new Organisation({
        name: req.body.name,
        org_id: req.body.org_id
    });
console.log(req);
    org.save((err, org)=>{
        if(err){
            res.status(400).json({msg: err})
        }else{
            res.status(200).json({status: "success", org})
        }
    });
}