var request = require('request');

function magic(x, y, next) {
    request('http://apps.wavana.com/magicnumber?x='+x+'&y='+y, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var data = Math.sqrt(body);
            return next(null, data) ;
        }else{
            next(err)
        }
    });    
}

module.exports = magic;
    