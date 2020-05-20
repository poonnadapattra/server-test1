const express = require('express')
const app = express()

app.listen(3001, function () {
    console.log("Listening on port 3001!");
});

app.get('/test', (req, res) => {
    res.send('hello server 1')
});