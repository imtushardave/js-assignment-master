exports.tryCatch = (method) => async (req, res, next) => {
    try {
        await method(req, res);
    } catch (error) {
        return next(error);
    }
}