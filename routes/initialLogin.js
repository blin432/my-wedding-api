var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('information sent' )
  console.log('information body', req.body);

});

module.exports = router;
