const Tour = require('../controllers/tour');
const { tryCatch } = require('../utils/tryCatch');

module.exports = function(app) {
    app.route('/tours').get(tryCatch(async (req, res) => {

        return res.json(await Tour.getAllTours());

    }));

    app.route('/tour/matches').get(tryCatch(async (req, res) => {

        let params = req.query;
        let result = await Tour.getMatchesByTourName(params);
        return res.json(result);

    }));
}