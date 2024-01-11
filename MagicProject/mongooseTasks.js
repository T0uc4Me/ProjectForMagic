const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');

var schema = mongoose.Schema({ name: String })
schema.methods.noise = function(){
    console.log(this.get("name") + " издал все звуки стихий")
}
const Magic = mongoose.model('Magic', schema);

const element = new Magic({ name: 'ВодОньЕтер' });

element.save()
    .then(() => {
        element.noise();
    })
    .catch((err) => {
        console.error(err);
    });