//import module
import http from 'http';
// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
    console.log("Hello World");
})
// Call the server's listen() method with the port number 3001.
server.listen(4321, () => {
    console.log("Server is running")
});