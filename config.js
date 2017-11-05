// config.js

const dotenv = require('dotenv');

dotenv.config();

const key = process.env.SECRET_KEY;

module.exports = key;
