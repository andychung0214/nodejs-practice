var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

function checkFireBase() {

  console.log(firebaseAdmin.ref())

}

/* GET home page. */
router.get('/', function (req, res, next) {
  checkFireBase();

  firebaseAdmin.ref('todo-list').once('value', function (snapshot) {
    let data = snapshot.val();
    console.log('data=', data);
    // let todoTitle = data.title;
    res.render('index', { title: 'Express', data: data });

  })

});

module.exports = router;
