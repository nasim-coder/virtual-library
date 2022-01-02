const mongoose = require('mongoose')
const Organisation = require('../model/organization');

exports.createOrg = (req, res) => {
    let org = new Organisation({
        name: req.name,
        org_id: req.org_id
    });

    org.save((err, org)=>{
        if(err){
            res.status(400).json({msg: err})
        }else{
            res.status(200).json({status: "success", org})
        }
    });
}