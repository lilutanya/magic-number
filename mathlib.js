    var salt = 31337;

    function magic(x, y) {
        return Math.sqrt(parseInt(x) + parseInt(y)*salt);
    }
    function isInteger(x) {
        return x % 1 === 0;
    }
    module.exports = {
        magic: magic,
        isInteger: isInteger
    };
    