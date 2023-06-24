const ErrorName = require('../enums/ErrorName');

const errorHandler = (error, req, res, next) => {

    switch (error.name) {
        case ErrorName.INVALID_VALUE:
        case ErrorName.VALIDATION_ERROR :
            return res.status(400).send({message: error.message});
        default:
            return res.status(500).send({message: error.message});
    }
  
}

module.exports = errorHandler;