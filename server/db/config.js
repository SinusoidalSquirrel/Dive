// var redis = require('redis');
//
//
// // By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively.
// //var client = redis.createClient(port, host);
// var client = redis.createClient();
// client.on('connect', function() {
//     console.log('Commander, you are connected');
// });
//
// client.flushdb();
// module.exports.client;


// var mongoose = require('mongoose');
// mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/divedb';
// mongoose.connect(mongoURI);

// // Run in seperate terminal window using 'mongod'
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//  console.log('Mongodb connection open');
// });

// module.exports = db;
