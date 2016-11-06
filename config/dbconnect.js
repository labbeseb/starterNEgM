'use strict';

/** Set the const with the informations of your Mongo server / database
In the route file, call :

    let dbCo = require('../models/dbconect');
    let mod_sample = require('../models/sample');

 */

let mongoose = require('mongoose');

module.exports = (() => {

    const   dbName = `sample`,
            dbUrl = `mongodb://localhost/${dbName}`;
        
    mongoose.connect(dbUrl);
    
    let db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log(`Connected to DB : ${dbName}`);
    });

})();