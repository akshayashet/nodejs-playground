const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log("This always runs!");
    res.send("<h1>Hello from Express!</h1>");
});

app.use("/add-product", (req, res, next) => {
    console.log("In another middleware!");
    res.send("<h1>The 'Add Product' Page</h1>");
});

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
});