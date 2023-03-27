var express = require('express')
var router = express.Router();
var addUserControler = require('../Controller/adduser.controller.js')

router.get('/',(req,res,next)=>{
    res.render('user')
  })
  
router.get('/adduser',addUserControler.addUser)

module.exports = router;