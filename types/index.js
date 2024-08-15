

var x = Object.prototype.toString;
function isString(val){
    return x.call(val) === '[object String]';
}
function isNumber(val){
    return x.call(val) === '[object Number]';
}
function isBoolean(val){
    return x.call(val) === '[object Boolean]';
}


function isArray(val){
    return x.call(val) === '[object Array]';
}
function isObject(val){
    return x.call(val) === '[object Object]';
}

module.exports = {isArray, isObject, isNumber, isBoolean, isString};