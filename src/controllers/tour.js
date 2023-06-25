const { validateField } = require('../utils/validations');
const Tour = require('../models/tour');
const getOrSetCache = require('../lib/redis');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;
    validateField(name, 'Missing required parameter: name');

    // respone caching using Redis
    const matches = await getOrSetCache(`matches?tourName=${name}`, async () => {
        return await Tour.getMatchesByTourName(params);
    }); 

    return matches;
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}