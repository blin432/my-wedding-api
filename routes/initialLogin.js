var express = require('express');
var router = express.Router();
var pool = require('../db.js');

/* GET home page. */
// router.post('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send('information sent' )
//   console.log('information body', req.body);

// });

router.get('/:name1', async(req, res, next) => {
  try{
    const {name1} = req.params
    const allGuest = await pool.query("select * From rsvp where name1 = $1 ",[name1]);
    if(allGuest.rows.length>0){
      res.json(allGuest.rows)
      console.log('sedinng back ',allGuest.rows);
    }
    else{
      res.send(false)
    }
    console.log("test",allGuest);
    console.log(id);
  }catch(err){
    console.log(err.message);
  }
});

module.exports = router;
