const http = require('http');
const port = 3000;

const myServer = http.createServer((req, res)=>{
    res.end("Hello. This is the myServer");
});

myServer.listen(port, ()=>{
    console.log("My Server is running Successfully at port", port);
});