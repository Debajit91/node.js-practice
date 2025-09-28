const http = require('http');
const http = require('http');
const port = 3000;

const myServer = http.createServer((req, res)=>{
    res.end("<h1>Hello. This is the myServer </h1>");
});

myServer.listen(port, ()=>{
    console.log("My Server is running Successfully at port", port);
});