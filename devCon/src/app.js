const express = require('express');

const app = express();

// this will match get http method api calls to /users
app.get('/user', (req, res) => {
    res.send({
        firstName: 'Akshay',
        lastName: 'Shet',
    });
});

app.post('/user', (req, res) => {
    // Saving user to database
    res.send({
        message: 'User created successfully!',
    });
});

app.delete('/user', (req, res) => {
    // Deleting user from database
    res.send({
        message: 'User deleted successfully!',
    });
});

app.put('/user', (req, res) => {
    // Updating user in database
    res.send({
        message: 'User updated successfully!',
    });
});

app.patch('/user', (req, res) => {
    // Updating user in database
    res.send({
        message: 'User updated successfully!',
    });
});

// this will match all http methods api calls to /hello
app.use("/hello", (req, res) => {
    console.log("Hello from the middleware!");
    res.send("<h1>Hello from the middleware!</h1>");
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});