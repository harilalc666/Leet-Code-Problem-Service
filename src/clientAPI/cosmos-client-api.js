const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.AZURE_ENDPOINT;
const key = AZURE_KEY;
const containerId = 'error-logs'
const databaseId = 'logs';

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

async function logToCosmosDB(errorData){
  try {
    await container.items.create(errorData);
    console.log('Log entry created in Cosmos DB');
  } catch (error) {
    console.log('Error in logging the error logs in Cosmos DB', error.message);
    
  }
}

module.exports = logToCosmosDB;
