require('dotenv').config();

const PORT = process.env.PORT || 8080;
const { MONGODB_URI_TEST, MONGODB_URI } = process.env;
module.exports = {
    MONGODB_URI_TEST,
    MONGODB_URI,
    PORT,
};
