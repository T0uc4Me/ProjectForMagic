var express = require('express');
var router = express.Router();
var Elem = require("../models/magic").Elem
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Маршрутизатор 3-х стихий');
});

router.get("/:nick", async (req, res, next) => {
    try {
        const [elem, elems] = await Promise.all([
            Elem.findOne({ nick: req.params.nick }),
            Elem.find({}, { _id: 0, title: 1, nick: 1 })
          ]);
      if (!elem) {
        throw new Error("Стихия испарилась");
      }
      renderMagic(res, elem.title, elem.avatar, elem.desc, elems);
    } catch (err) {
      next(err);
    }
  });

  function renderMagic(res, title, picture, desc, elems) {
    console.log(elems);
  
    res.render('magic', {
        title: title,
        picture: picture,
        desc: desc,
        menu:elems

    });
  }

module.exports = router;