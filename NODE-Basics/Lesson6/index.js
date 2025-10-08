const http = require('http');
const fs = require('fs');
const PORT = 3000;

const app = http.createServer((req, res) =>{
    if(req.url === '/'){
        fs.readFile('index.html', (err, data)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === '/about'){
        fs.readFile('about.html', (err, data)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === '/contact'){
        fs.readFile('contact.html', (err, data)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    } else {
        fs.readFile('error.html', (err, data)=>{
            res.writeHead(404, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});