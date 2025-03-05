const fs = require('fs');
const https = require('https');

console.log("Node.js is running");

var a = 1000;
var b = 2000;

https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    console.log("Got response: " + res.statusCode);
})

setTimeout(() => {
    console.log("Set timeout called after 5 seconds");
}, 5000)

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

function multiply(a, b) {
    return a * b;
}

console.log(multiply(a, b));