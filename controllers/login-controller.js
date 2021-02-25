const express = require('express');
const router = express.Router();
const loginService = require('./login-service.js');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));

router.post('/validate', validate);

module.exports = router;
function validate(req,res,next){
    console.log(req.body.email,req.body.uname),
    loginService.validate(req.body.email,req.body.uname)
    .then(valid => res.json({success: valid}))
    .catch(err => next(err));
}