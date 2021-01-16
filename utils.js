'use strict'

const fs = require('fs');

const getQueryString = (filename) => {
    //return content of a file in a string format
    return fs.readFileSync(__dirname + '/' + filename, 'utf8');
}

const saveJSONFile = (filename, jsonData) => {
    fs.writeFile(`${__dirname}/${filename}`, jsonData, function (err) {
        if (err) {
            console.log(err);
        }
    })
};


module.exports = {
    getQueryString,
    saveJSONFile
};
