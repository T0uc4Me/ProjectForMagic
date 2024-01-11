const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');

const Magic = mongoose.model('Magic', { name: String });
const element = new Magic({ name: 'ВодОньЕтер' });

element.save()
    .then(() => {
        console.log('Шум ветра моря и огня, ласкают ваши уши...');
    })
    .catch((err) => {
        console.error(err);
    });