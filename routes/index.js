var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

function checkFireBase(){
  
  console.log(firebaseAdmin.ref())

}

/* GET home page. */
router.get('/', function(req, res, next) {
  checkFireBase();
  firebaseAdmin.ref().set('Hello Firebase');
  firebaseAdmin.ref().set({home: {city: 'london', size: 100}, home2: {city: 'new Taipei', size: 98}});
  firebaseAdmin.ref('home/city').set('Taipei');

  let city = firebaseAdmin.ref('home/city');
  city.once('value', function(snapshot){
    let data = snapshot.val();
    res.render('index', { title: 'Express',  data: data});

  })

});

module.exports = router;
