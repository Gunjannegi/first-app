const rootDir = require('../util/path');
const path = require('path');
exports.getContactForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.postContactDetails = (req,res,next)=>{
    res.redirect('/success')
}