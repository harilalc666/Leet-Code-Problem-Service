require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    ATLAS_DB_CONNECT: process.env.MONGO_DB_CONNECTION,
}