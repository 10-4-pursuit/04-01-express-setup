// Your code goes here

const express = require ('express');
const app = express();
app.get ('/', (req, res) => {
    res.send('Welcome to my first Express server!')
})

app.use ('/about', (req, res) => {
    res.send({
        name: 'John',
        age: 30
    }).send.Status(200)

    
})

module.exports = app;
// Note: You do not have to call app.listen() in this file. The tests will do that for you.

// Make sure you export the express app you created here by doing module.exports = <your express app>;




