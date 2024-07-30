const express = require('express');
const apiRouter = express.Router();
const todayDate = new Date();

const v1Router = require('./V1/index')


apiRouter.use('/api',v1Router);

apiRouter.get('/health', (req, res)=>{
    res.status(200).json({
        success: true,
        serverUpTime: todayDate
    })
})
module.exports = apiRouter