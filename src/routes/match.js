const Match = require('../controllers/match');
const { tryCatch } = require('../utils/tryCatch');

module.exports = function(app) {
    app.route('/matches').get(tryCatch(async (req, res) => {

        return res.json(await Match.getAllMatches());

    }));
}