var qrcode = require('qrcode-js');
var Promise = require('bluebird');

function generateQr(id, data) {
    return new Promise(function(resolve, reject) {
        var base64 = qrcode.toBase64(data, 4);
        var base64Data = base64.replace(/^data:image\/gif;base64,/, "");
        require("fs").writeFile("./qrcodes/" + id + ".png", base64Data, 'base64', function(err) {
            if (err) reject(err);
            else resolve(id + '.png');
        });
    });

}

function getAllQRCodes() {
    return new Promise(function(resolve, reject) {
        require("fs").readdir("./qrcodes/", (err, files) => {
            if (!err) resolve(files);
            else reject(err);
        })
    });
}
module.exports = {
    generateQr: generateQr,
    getAllQRCodes: getAllQRCodes
}