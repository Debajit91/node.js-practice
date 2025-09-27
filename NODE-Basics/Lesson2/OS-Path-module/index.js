// os
// directly require os
const os = require('os');
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());


// destructuring
const {freemem} = require('os');
console.log(freemem());
