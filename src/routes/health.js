const { tryCatch } = require("../utils/tryCatch")

module.exports = function(app) {
    app.route('/health').get(tryCatch(async (req, res) => {
        
        return res.json({ status: 'OK' });

    }));
}