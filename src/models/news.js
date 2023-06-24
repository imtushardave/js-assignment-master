const mysql = require('../lib/mysql');

const addNews = async news => {
    const statement = 
    'insert into news(title, description, sportId, tourId, matchId) values (?, ?, ?, ?, ?);';
    const parameters = [ news.title, news.description, news.sportId, news.tourId, news.matchId ];
    return await mysql.query(statement, parameters);
}

const getNewsForSport = async params => {
    const statement = 'select * from news where news.sportId = ? ;';
    const parameters = [ params.sportId ];
    return await mysql.query(statement, parameters);
}

const getNewsForTour = async params => {
    const statement = 'select * from news where news.tourId = ? ;';
    const parameters = [ params.tourId ];
    return await mysql.query(statement, parameters);
}

const getNewsForMatch = async params => {
    const statement = 'select * from news where news.matchId = ? ;';
    const parameters = [ params.matchId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    addNews : addNews,
    getNewsForSport : getNewsForSport,
    getNewsForTour : getNewsForTour,
    getNewsForMatch : getNewsForMatch
}