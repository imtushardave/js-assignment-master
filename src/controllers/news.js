const News = require('../models/news');
const Tour = require('../models/tour');
const Match = require('../models/match');

const NewsType = require('../enums/NewsType');
const ErrorName = require('../enums/ErrorName');

const { validateField, validateAddNews } = require('../utils/validations');


const addNews = async (params, news) => {

    validateAddNews(params, news);

    const newsType = params['type'];
    
    switch (newsType) {
        case NewsType.MATCH :
            const matchId = params['id'];
            return addNewsForMatch(matchId, news);
        case NewsType.TOUR : 
            const tourId = params['id'];
            return addNewsForTour(tourId, news);
        default : 
            let error = new Error(`${newsType} is not a valid news type`);
            error.name = ErrorName.INVALID_VALUE;
            throw error;
    }
}


const addNewsForMatch = async (matchId, news) => {
    
    let matchDetails =  await Match.getTourAndSportDetailsForMatch(matchId);
    validateField(matchDetails, `No tour found with id : ${matchId}`);

    news.sportId = matchDetails.sportId;
    news.tourId = matchDetails.tourId;
    news.matchId = matchId;

    return await News.addNews(news);
}

const addNewsForTour = async (tourId, news) => {
    
    let tourDetails = await Tour.getTour(tourId);
    validateField(tourDetails, `No tour found with id : ${tourId}`);

    news.sportId = tourDetails.sportId;
    news.tourId = tourId;
    
    return await News.addNews(news);
}

const getNewsForSport = async params => {
    const sportId = params['sportId'];
    validateField(sportId, 'Missing path parameter : news/sport/{id}');
    return await News.getNewsForSport(params);
}

const getNewsForTour = async params => { 
    const tourId = params['tourId'];
    validateField(tourId, 'Missing path parameter : news/tour/{id}');
    return await News.getNewsForTour(params);
}

const getNewsForMatch = async params => { 
    const matchId = params['matchId'];
    validateField(matchId, 'Missing path parameter : news/match/{id}');
    return await News.getNewsForMatch(params);
}

module.exports = {
    addNews: addNews,
    getNewsForSport : getNewsForSport,
    getNewsForTour : getNewsForTour,
    getNewsForMatch: getNewsForMatch
}