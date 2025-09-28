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

// Printing directory name & filename
console.log(__dirname);
console.log(__filename);

const path = require('path');
// console.log(path);

const extensionName = path.extname('index.html');
console.log(extensionName);

const joinName = path.join(__dirname + "/../views");
console.log(joinName);
