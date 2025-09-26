const fs = require('fs');

fs.writeFile('demo.txt', "This is sample text", function(err){
    if(err){
        console.log(err);
    }else{
        console.log('successful')
    }
})