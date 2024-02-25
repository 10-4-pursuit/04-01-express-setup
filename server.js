// You should import the express app and listen on the correct port in server.js.
const app = require('./index');

const port = 5000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});