const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

// Configure Handlebars
// const hbs = handlebars.create({
//     extname: '.hbs' // Specify extension for handlebar templates
//   });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views')); // Specify your views directory

//homepage route
// app.get("/", (req, res) => { 
//     res.sendFile(path.join(__dirname, '../public', 'index.html'))

// })


  // Set static folder
app.use(express.static(path.join(__dirname, '../public')));

// console.log(path.join(__dirname, 'public'))

module.exports = app