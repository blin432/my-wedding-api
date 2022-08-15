var express = require('express');
var router = express.Router();
var pool = require('../db.js');

/* GET home page. */
// router.post('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send('information sent' )
//   console.log('information body', req.body);

// });

router.get('/', async(req, res, next) => {
  res.send('hellow this is working');
});

module.exports = router;
