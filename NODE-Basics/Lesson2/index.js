// built in method- fs method
const fs = require('fs');

// new file create / write / override
fs.writeFile('demo1.txt', 'My Name is Debajit Roy.', (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})

// append a file
fs.appendFile('demo1.txt', ' I am 30 years old.', (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})