'use strict';

let mongoose = require('mongoose');

let serverSchema = mongoose.Schema({
    name: String,
    int: Number,
    others: String
});

let Server = mongoose.model('Server', serverSchema);

module.exports = Server;