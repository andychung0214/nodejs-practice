var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

function checkFireBase(){
  
  console.log(firebaseAdmin.ref())

}

/* GET home page. */
router.get('/', function(req, res, next) {
  checkFireBase();
  res.render('index', { title: 'Express' });
});

module.exports = router;
