require("dotenv").config();
const logger = require('morgan');
// const path = require("path");
// const bodyParser = require("body-parser");
// const expressValidator = require("express-validator");

module.exports = {
    init(app, express) {

        app.use(logger('dev'));
        
    }
};