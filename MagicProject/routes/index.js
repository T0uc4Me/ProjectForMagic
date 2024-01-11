var express = require('express');
var router = express.Router();
var Elem = require("../models/magic").Elem

/* GET home page. */
router.get('/', function(req, res, next) {
  Elem.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.render('index', {
    title: 'Express',
    menu: menu
    });
    })
});


module.exports = router;
