//require module
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Hello World")
})

// Save the result of the createServer() method in a variable named server.

server.listen(4321, () => {
    console.log("Server running on port 4321")
})
// Call the server's listen() method with the port number 3001.