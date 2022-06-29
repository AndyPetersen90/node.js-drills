const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, './text.txt'), 'Hello World',
(err) =>{
    if(err) {
        console.log(err)
    } else {
        console.log('Success')
    }
})

fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data, 'Read Successfully')
    }
})

fs.writeFile(__dirname + '/text.txt', "Welcome to the world wide web", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Successfully re-written')
    }
})

fs.rename(__dirname + '/text.txt', __dirname + '/newText.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Successfully renamed')
    }
})

fs.unlink(__dirname + '/newText.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Successfully unlinked')
    }
})