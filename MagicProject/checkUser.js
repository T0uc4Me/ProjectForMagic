const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/all");

const User = require("./models/user.js").User;

const first_user = new User({
    username: "Vasya",
    password: "qwerty"
});

first_user.save()
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        throw err;
    });
