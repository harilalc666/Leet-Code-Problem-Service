const express = require('express');
const app = express();
const apiRouter = require('./src/routes');
const errorHandler = require('./src/utils/errorHandler');
const { PORT } = require('./src/config/server.config');
const connetToMongoDb = require('./src/config/db.config');
const serverUpTime =  new Date();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use('/leet-code', apiRouter);

// last error middleware
app.use(errorHandler)
app.listen(PORT, async()=>{
    console.log(`Server is runnig on port ${PORT}`)
    await connetToMongoDb();
    console.log('Connected to MongoDb Successfully');
})