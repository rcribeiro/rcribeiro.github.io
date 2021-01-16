'use strict'

const express = require('express');
const sqlqueryRouter = express.Router();
const { getAllFromDatabase } = require('./db');
const { saveJSONFile } = require('../utils');
const { gitCommitPush } = require('../gitcommitpush')

sqlqueryRouter.get('/', async (req, res, next) => {
    const result = await getAllFromDatabase('sqlquery.sql');

    const dt = new Date();
    const fullYear = dt.getFullYear();
    const month2Digts = `0${(dt.getMonth() + 1)}`.slice(-2);
    const day2Digits = `0${dt.getDate()}`.slice(-2);
    const filename = `sqlquery_${fullYear}-${month2Digts}-${day2Digits}.json`;
    
    // saving result set JSON format to a local file
    await saveJSONFile(filename, JSON.stringify(result, undefined, 4));
    // console.log(`result: ${JSON.stringify(result, undefined, 4)}`);

    await gitCommitPush(filename);

    res.send(result);
});

module.exports = sqlqueryRouter;