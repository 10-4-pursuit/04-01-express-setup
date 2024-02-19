// You should import the express app and listen on the correct port in server.js.
const express = require('express');
const app = require('./index');



const app = express();
const port = 3000;
app.get('/', index);
app.get('/about', about);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




export default app;