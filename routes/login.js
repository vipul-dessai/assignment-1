
const express = require('express');
const loginRouter = express.Router();
const indexController = require('../controllers/index');
const loginService = require('../controllers/login.js');

loginRouter.get('/', function (req, res, next) {
  indexController.renderLogin(req, res, next);
});

loginRouter.post('/validate', function (req, res, next) {
  const {email, uname} = req.body;
  loginService.validate(email, uname)
    .then(valid => res.json({ success: valid }))
    .catch(err => next(err));
})

module.exports = loginRouter;