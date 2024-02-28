const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();

const jsonData = {  
    message: "Welcome To My First Express Server!",   
  };

  const jsonObject = {  
    name: "Christine Darden",
    age: "81"   
  };



  app.get("/raw", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send( {jsonData} );
  });

  app.get("/rawAbout", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({jsonObject});
  });
  
  // Set static folder
app.use(express.static(path.join(__dirname, '../public')));

// app.get("/", (req, res) => {
  
//     res.json( {jsonData} );
//   });


// app.get('/', (req, res) => {
//     res.json('Hello World!');
//   });

module.exports = app