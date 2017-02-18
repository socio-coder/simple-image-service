var express = require('express');

var server = express();

server.use('/', express.static('site'));

server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('Server is listening..');
});