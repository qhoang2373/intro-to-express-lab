const express = require('express')
const app = express()

app.get('/greetings/Quan', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`)
});

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })