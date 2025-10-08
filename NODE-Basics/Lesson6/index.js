const http = require('http');
const PORT = 3000;

const app = http.createServer((req, res) =>{
    console.log(req.url);
    res.end("Welcome to my server");
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});