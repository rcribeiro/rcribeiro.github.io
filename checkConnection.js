const oracledb = require('oracledb');
const password = 'ldesk'
const dbConfig = require('./server/dbconfig.js');

// checkConnection asycn function
async function checkConnection() {
    let conn
    try {
        conn = await oracledb.getConnection(dbConfig);
        console.log(`Connection open`);
    } catch (err) {
        console.log(err.message)
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

checkConnection();