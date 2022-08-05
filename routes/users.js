var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(firebaseAdmin.ref())
  res.send('respond with a resource');
});

module.exports = router;
