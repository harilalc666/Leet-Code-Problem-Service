const express = require('express');
const app = express();

const { PORT } = require('./src/config/env.config');
const apiRouter = require('./src/routes');
const serverUpTime =  new Date();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use('/problems', apiRouter);

app.listen(PORT, ()=>{
    console.log(`Server is runnig on port ${PORT}`)
})