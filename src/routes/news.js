const News = require('../controllers/news');

module.exports = function(app) {

    // add news for match
    app.route('/news/match/:id').post(async (req, res, next) => {
        try {
            let news = req.body;
            let matchId = req.params['id'];
            await News.addNewsForMatch(matchId, news);
            return res.json({ status: 'OK' });
        } catch (err){
            return next(err);
        }
    });

     // add news for tour
     app.route('/news/tour/:id').post(async (req, res, next) => {
        try {
            let news = req.body;
            let tourId = req.params['id'];
            await News.addNewsForTour(tourId, news);
            return res.json({ status: 'OK' });
        } catch (err){
            return next(err);
        }
    });

    // get news by sport id
    app.route('/news/sport/:id').get(async (req, res, next) => {
        try {
            let params = req.params;
            let result = await News.getNewsForSport(params);
            return res.json(result);
        } catch (err){
            return next(err);
        }
    });

    //get news by tour id 
    app.route('/news/tour/:id').get(async (req, res, next) =>{
        try {
            let params = req.params;
            let result = await News.getNewsForTour(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    //get news by match id
    app.route('/news/match/:id').get(async (req, res, next) => {
        try {
            let params = req.params;
            let result = await News.getNewsForMatch(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}