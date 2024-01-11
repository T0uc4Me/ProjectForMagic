var express = require('express');
var router = express.Router();
var Elem = require("../models/magic").Elem

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Маршрутизатор 3-х стихий');
});

router.get("/:nick", async (req, res, next) => {
    try {
      const elem = await Elem.findOne({ nick: req.params.nick });
      console.log(elem);
      if (!elem) {
        throw new Error("Стихия испарилась");
      }
      res.render('magic', {
        title: elem.title,
        picture: elem.avatar,
        desc: elem.desc
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;