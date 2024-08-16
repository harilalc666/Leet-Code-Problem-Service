const express = require('express');
const app = express();
const apiRouter = require('./src/routes');
const port = process.env.PORT;
const connetToMongoDb = require('./src/config/db.config');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use('/leet-code', apiRouter);


app.listen(port, async () => {
	console.log(`Server is runnig on port ${port}`)
	try {
		await connetToMongoDb()
		console.log('Connected to MongoDb Successfully');
	} catch (error) {
		console.log(`Connection to Mongo DB failed, ${error.message}`);
		process.exit(1)
	}
})