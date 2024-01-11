var express = require('express');
var router = express.Router();
//var Elem = require("../models/magic").Elem
var async = require("async")
var db = require('../mySQLConnect.js');
var checkAuth = require("./../middleware/checkAuth.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Маршрутизатор 3-х стихий');
});

router.get("/:nick", checkAuth,function(req, res, next) {
  db.query(`SELECT * FROM elements WHERE elements.nick = '${req.params.nick}'`, (err,
  elems) => {
  if(err) {
  console.log(err);
  if(err) return next(err)
  } else {
  if(elems.length == 0) return next(new Error("Стихия испарилась..."))
  var elem = elems[0];
  res.render('magic', {
  title: elem.title,
  picture: elem.avatar,
  desc: elem.about
})
}
})
});

// router.get("/:nick", async (req, res, next) => {
//     try {
//         const [elem, elems] = await Promise.all([
//             Elem.findOne({ nick: req.params.nick }),
//             Elem.find({}, { _id: 0, title: 1, nick: 1 })
//           ]);

//       if (!elem) {
//         throw new Error("Стихия испарилась");
//       }
//       renderMagic(res, elem.title, elem.avatar, elem.desc, elems);
//     } catch (err) {
//       next(err);
//     }
//   });

//   function renderMagic(res, title, picture, desc, elems) {
//     res.render('magic', {
//         title: title,
//         picture: picture,
//         desc: desc
//     });
//   }

module.exports = router;