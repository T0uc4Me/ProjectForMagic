var express = require('express');
var router = express.Router();
var Elem = require("../models/magic").Elem
var User = require("./../models/user").User

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    
    req.session.greeting = "Hi!!!"
    res.render('index', 
    { title: 'Express', 
      counter:req.session.counter 
    });
  } catch (err) {
    next(err);
  }
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

router.post('/logreg', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
      const user = await User.findOne({ username: username });

      if (user) {
          if (user.checkPassword(password)) {
              req.session.user = user._id;
              res.redirect('/');
          } else {
              res.render('logreg', { title: 'Вход' });
          }
      } else {
          const newUser = new User({ username: username, password: password });
          const savedUser = await newUser.save();
          req.session.user = savedUser._id;
          res.redirect('/');
      }
  } catch (err) {
      next(err);
  }
});
  
module.exports = router;
