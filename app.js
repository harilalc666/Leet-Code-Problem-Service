const express = require('express');
const app = express();
const apiRouter = require('./src/routes');
const errorHandler = require('./src/utils/errorHandler');
const port = process.env.PORT;
const connetToMongoDb = require('./src/config/db.config');
const logger = require('./src/logger/logger');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use('/leet-code', apiRouter);


// last error middleware
app.use(errorHandler)


app.listen(port, async () => {
	console.log(`Server is runnig on port ${port}`)
	try {
		await connetToMongoDb()
		logger.info('Connected to MongoDb Successfully');
		console.log('Connected to MongoDb Successfully');
	} catch (error) {
		logger.error(`Connection to Mongo DB failed, ${error.message}`);
		console.log(`Connection to Mongo DB failed, ${error.message}`);
		process.exit(1)
	}
})