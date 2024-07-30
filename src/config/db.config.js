const mongoose = require('mongoose');
const { ATLAS_DB_CONNECT } = require('./server.config');

async function connetToMongoDb(){
    try {
        console.log('wait for the DB connection......');
        await mongoose.connect(ATLAS_DB_CONNECT);
    } catch (error) {
        console.error(`Connection to Mongo DB failed: ${error.message}`);
        throw error;
    }
}

module.exports = connetToMongoDb;