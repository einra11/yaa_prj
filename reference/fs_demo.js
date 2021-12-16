const fs = require('fs');
const path = require('path');


// Create folder with arrow function
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created!')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', 
// err => {
//         if(err) throw err;
//         console.log('File created!')

//         // append and write to file
//         fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love dogs",
//         err => {
//         if(err) throw err;
//         console.log('Appended');
//     })
// });

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

//Rename file
fs.rename(path.join(__dirname, '/test', 'helloworld.txt'), path.join(__dirname, '/test', 'hello.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed')
})