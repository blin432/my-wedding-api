var express = require('express');
var router = express.Router();
var pool = require('../db.js');
/* GET users listing. */


router.put('/:name1', async(req, res, next) => {
  try{
    const {name1} = req.params
    console.log('body',req.body)
    const {guest1,guest2} = req.body
    const allGuest = await pool.query("UPDATE RSVP SET guest1 = $1, guest2 = $2  WHERE name1 = $3 ",[guest1, guest2, name1]);

    console.log(allGuest);
    if(allGuest.rows.length>0){
      res.send(true)
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
