const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getTourAndSportDetailsForMatch = async matchId => {
    const statement = 'select tours.sportId as sportId, tours.id as tourId from matches ' + 
    'left join tours on matches.tourId = tours.id where matches.id = ?';
    const parameters = [ matchId ];
    let result = await mysql.query(statement, parameters);
    //result must be unique for each match id
    return result[0];
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourAndSportDetailsForMatch : getTourAndSportDetailsForMatch
}