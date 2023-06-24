const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select matches.* from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

const getTour = async tourId => {
    const statement = 'select * from tours where tours.id = ?';
    const parameters = [ tourId ];
    let result = await mysql.query(statement, parameters);
    return result[0];
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getTour : getTour
}