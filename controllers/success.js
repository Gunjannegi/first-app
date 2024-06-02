
const path = require('path');
const rootDir = require('../util/path');
exports.getSuccessMessage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}