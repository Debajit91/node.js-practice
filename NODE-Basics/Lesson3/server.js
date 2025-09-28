const http = require('http');

const myServer = http.createServer((req, res)=>{
    res.end("Hello. This is the myServer");
});

myServer.listen(3000, ()=>{
    console.log("My Server is running Successfully at localhost:3000");
});