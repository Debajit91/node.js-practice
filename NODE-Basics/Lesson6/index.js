const http = require('http');
const PORT = 3000;

const app = http.createServer((req, res) =>{
    res.end("Welcome to the server");
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});