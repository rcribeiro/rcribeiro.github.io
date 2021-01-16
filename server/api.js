'use strict'

const express = require('express')
const apiRouter = express.Router();

const sqlqueryRouter = require('./sqlquery.js')

apiRouter.use('/sqlquery', sqlqueryRouter);

module.exports = apiRouter;