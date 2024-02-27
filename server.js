// You should import the express app and listen on the correct port in server.js.

const app = require('./index');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
})