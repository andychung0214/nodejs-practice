var express = require('express');
var router = express.Router();

function checkFireBase(){
  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  checkFireBase();
  res.render('index', { title: 'Express' });
});

module.exports = router;
