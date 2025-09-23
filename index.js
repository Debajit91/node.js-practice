// get all function module
const s1 = require('./student');

console.log(s1.getName());
console.log(s1.getAge());
console.log(s1.result);

// get a single function module
const {getAge} = require('./student');
console.log(getAge());

// const {getHeight} = require('./student');
// console.log(getHeight());