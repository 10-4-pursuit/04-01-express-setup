// Your code goes here

// Note: You do not have to call app.listen() in this file. The tests will do that for you.

// Make sure you export the express app you created here by doing module.exports = <your express app>;
const express = require('express');

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send('Welcome to my first Express server!');
});

app.get('/about', (req, res) => {
    const resObj = {
        name: 'John',
        age: 25
    };
    res.json(resObj);
});

module.exports = app;

