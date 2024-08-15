const { isArray, isObject, isNumber, isBoolean, isString } = require('./index');

console.log(isArray([1, 2, 3]));        
console.log(isObject({ a: 1 }));        
console.log(isNumber(123));             
console.log(isBoolean(true));           
console.log(isString('hello'));         

console.log(isArray('not an array'));   
console.log(isObject([1, 2, 3]));       
console.log(isNumber('123'));           
console.log(isBoolean('true'));         
console.log(isString(456));             