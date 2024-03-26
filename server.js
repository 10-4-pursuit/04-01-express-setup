// You should import the express app and listen on the correct port in server.js.
const app = require('./index.js');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
})