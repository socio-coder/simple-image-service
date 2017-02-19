var express = require('express');
var qrUtil = require('./utils/qr-util');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());
server.post('/qr-generate', function(req, res) {
    qrUtil.generateQr(req.body.id, req.body.data).then(function(result) {
        res.status(201).send(result);
    }).catch(function(err) {
        res.status(500).send(err);
    });
});
server.get('/qr-codes/files', function(req, res) {
    qrUtil.getAllQRCodes().then(function(result) {
        res.status(200).send(result);
    }).catch(function(err) {
        res.status(500).send(err);
    });
});
server.use('/qr-codes', express.static('qrcodes'));
server.use('/', express.static('site'));

server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('Server is listening..');
});