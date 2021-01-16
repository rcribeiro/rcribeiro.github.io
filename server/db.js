'use strict'

const oracledb = require('oracledb');
const { getQueryString } = require('../utils');
const dbConfig = require('./dbconfig.js');

// Querying All from sqlquery.sql file
async function getAllFromDatabase(filename) {
    const query = getQueryString(filename);
    let conn
    try {
        conn = await oracledb.getConnection(dbConfig);
        console.log(`Connection open`);
        const result = await conn.execute(query, [], { outFormat: oracledb.OUT_FORMAT_OBJECT })
        console.log(`Query executed: ${query}`);
        // console.log(JSON.stringify(result.rows[0], undefined, 4));
        return result.rows;
    } catch (err) {
        console.log(err)
    } finally {
        if (conn) { // conn assignment worked, need to close
            try {
                await conn.close()
                console.log(`Connection closed`);
            } catch (err) {
                console.error(err.message);
            }
        }
    }
}

module.exports = {
    getAllFromDatabase
};
