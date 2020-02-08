const mongoose = require('mongoose');
const Products = require('./Models/Product');

const url = config.mongoUrl;

let _db;

const dbInit = () => {
    connect = mongoose.connect(url, {
        useMongoClient: true,
    });
    
    connect.then((db) => {
        console.log("Connected correctly to server");
    }, (err) => { console.log(err); });
}

const dbGet = () => {

}

module.exports = {
    dbInit,
    dbGet
}

exports.init = () => {
    connect = mongoose.connect(url, {
    useMongoClient: true,
    /* other options */
  });

    connect.then((db) => {
        console.log("Connected correctly to server");
    }, (err) => { console.log(err); });
}