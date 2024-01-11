const Elem = require("./../models/magic").Elem;

module.exports = async (req, res, next) => {
    try {
        res.locals.nav = [];
        const result = await Elem.find({}, { _id: 0, title: 1, nick: 1 });
        res.locals.nav = result;
        next();
    } catch (err) {
        next(err);
    }
};
