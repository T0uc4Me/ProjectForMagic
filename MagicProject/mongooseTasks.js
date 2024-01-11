const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test1');
var Elem = require("./models/magic").Elem

var elem = new Elem ({
    title: "ВодОньЕр",
    nick: "VodOnEr"
})

console.log(elem);
elem.save().then(() => {
        console.log(elem.title);
    })
