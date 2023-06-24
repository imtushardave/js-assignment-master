const News = require('../models/news');
const Tour = require('../models/tour');
const Match = require('../models/match');


const addNewsForMatch = async (matchId, news) => {
    const {title, description} = news;
    
    if (!title) {
        throw new Error('Missing required body parameter : title');
    }
    if (!description) {
        throw new Error('Missing required body parameter : description');
    }
    if (!matchId) {
        throw new Error('Missing path parameter : id');
    }

    let matchDetails =  await Match.getTourAndSportDetailsForMatch(matchId);
    news.sportId = matchDetails.sportId;
    news.tourId = matchDetails.tourId;
    news.matchId = matchId;

    return await News.addNews(news);
}

const addNewsForTour = async (tourId, news) => {
    const {title, description} = news;
    
    if (!title) {
        throw new Error('Missing required body parameter : title');
    }
    if (!description) {
        throw new Error('Missing required body parameter : description');
    }

    let tourDetails = await Tour.getTour(tourId);
    news.sportId = tourDetails.sportId;
    news.tourId = tourId;
    
    return await News.addNews(news);
}

const getNewsForSport = async params => {

    const sportId = params['id'];

    if (!sportId) {
        throw new Error('Missing required parameter : sportId');
    }

    return await News.getNewsForSport(params);
}

const getNewsForTour = async params => { 

    const tourId = params['id'];

    if (!tourId) {
        throw new Error('Missing Required Parameter : tourId');
    }

    return await News.getNewsForTour(params);
}

const getNewsForMatch = async params => { 

    const matchId = params['id'];

    if (!matchId) {
        throw new Error('Missing Required Parameter : matchId');
    }

    return await News.getNewsForMatch(params);
}

module.exports = {
    addNewsForMatch : addNewsForMatch,
    addNewsForTour : addNewsForTour,
    getNewsForSport : getNewsForSport,
    getNewsForTour : getNewsForTour,
    getNewsForMatch: getNewsForMatch
}
