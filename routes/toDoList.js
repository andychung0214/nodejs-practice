var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../connection/firebase-admin')

router.get('/', function (req, res, next) {
  let contentRef = firebaseAdmin.ref('todo-list')
  contentRef.once('value', function (snapshot) {
    let data = snapshot.val();
    res.render('toDoList', { 'toDoList': data });

  })

});

router.post('/add-item', function (req, res, next) {
  let content = req.body.content;
  let contentRef = firebaseAdmin.ref('todo-list').push();
  contentRef.set({ 'content': content }).then(function () {
    firebaseAdmin.ref('todo-list').once('value', function (snapshot) {
      res.send(
        {
          "success": true,
          "result": snapshot.val(),
          "message": "Data Insert Success"
        }
      );
    })
  })
})

router.post('/remove-item', function (req, res, next) {
  let _id = req.body.id;
  let contentRef = firebaseAdmin.ref('todo-list');
  contentRef.child(_id).remove().then(function () {
    contentRef.once('value', function (snapshot) {
      res.send(
        {
          "success": true,
          "result": snapshot.val(),
          "message": "Data Delete Success"
        }
      );
    })
  })


})

module.exports = router;