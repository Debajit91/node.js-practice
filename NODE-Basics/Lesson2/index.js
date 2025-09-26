// built in method- fs method
const fs = require('fs');

// new file create / write / override
// fs.writeFile('demo1.txt', 'My Name is Debajit Roy.', (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('successful')
//     }
// })

// append a file
// fs.appendFile('demo1.txt', ' I am 30 years old.', (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('successful')
//     }
// })

// read a file - utf-8 encoding system should apply to read data.
fs.readFile('demo1.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


// rename a file
fs.rename('demo1.txt', 'demo2.txt', (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})