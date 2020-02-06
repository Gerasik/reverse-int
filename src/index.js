module.exports = function reverse (n) {
    let value = n;
    if(Math.sign(value) === -1) value *= -1 
    return new String(value).split('').reverse().join('');
}
