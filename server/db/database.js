var redis = require('redis');

// By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively.
// var client = redis.createClient(port, host);

console.log("process.env.REDISTOGO_URL: ", process.env);
if (process.env.REDISTOGO_URL) {
  // TODO: redistogo connection
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var client = redis.createClient(rtg.port, rtg.hostname);
  console.log('rtg:', rtg);

  client.auth(rtg.auth.split(":")[1]);
} else {
  var client = redis.createClient();
}

client.on('connect', function() {
  console.log('connected');
});

client.flushdb();

module.exports.client = client;
