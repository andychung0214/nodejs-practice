var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

router.get('/', function(req, res, next) {
    console.log(firebaseAdmin.ref())

    

    res.render('toDoList', { title: 'Express',  data: 'data'});

  });
  
  module.exports = router;