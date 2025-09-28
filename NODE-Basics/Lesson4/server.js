const http = require('http');
const port = 3000;

const myServer = http.createServer((req, res)=>{
    res.writeHead(202, {'content-type':'text/html'})
    res.write("<h1>Hello. This is the myServer </h1>");
    res.end();
});

myServer.listen(port, ()=>{
    console.log("My Server is running Successfully at port", port);
});