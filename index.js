// Your code goes here

// Note: You do not have to call app.listen() in this file. The tests will do that for you.

// Make sure you export the express app you created here by doing module.exports = <your express app>;

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome to my first Express server!');
});

app.get('/about', (req, res, next) => {
    res.json({
        name: 'Sally', age: 34,
    })
})

module.exports = app;