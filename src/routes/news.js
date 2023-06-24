const News = require('../controllers/news');
const { tryCatch } = require('../utils/tryCatch');

module.exports = function(app) {

    //add news
    app.route('/news').post(tryCatch(async (req, res) => {
        
        const news = req.body;
        const queryParams = req.query;
    
        await News.addNews(queryParams, news);
        return res.json({ status: 'OK' });

    }));

    // get news by sport id
    app.route('/news/sport/:sportId').get(tryCatch(async (req, res) => {

        const params = req.params;
        const result = await News.getNewsForSport(params);
        return res.json(result);

    }));

    //get news by tour id 
    app.route('/news/tour/:tourId').get(tryCatch(async (req, res) =>{
        
        const params = req.params;
        const result = await News.getNewsForTour(params);
        return res.json(result);

    }));

    //get news by match id
    app.route('/news/match/:matchId').get(tryCatch(async (req, res) => {

        const params = req.params;
        const result = await News.getNewsForMatch(params);
        return res.json(result);

    }));
}