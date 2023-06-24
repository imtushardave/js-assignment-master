const Sport = require('../controllers/sport');
const { tryCatch } = require('../utils/tryCatch');

module.exports = function(app) {
    app.route('/sport/tour/match').get(tryCatch(async (req, res) => {
        
        return res.json(await Sport.getAllSportsToursAndMatches());

    }));
}