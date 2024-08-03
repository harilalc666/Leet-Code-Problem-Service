const mongoose = require('mongoose');
const mongoDbConnection = process.env.MONGO_DB_CONNECTION

async function connetToMongoDb() {
  try {
    console.log('wait for the DB connection......');
    await mongoose.connect(mongoDbConnection);
  } catch (error) {
    throw error;
    
  }
}

module.exports = connetToMongoDb;