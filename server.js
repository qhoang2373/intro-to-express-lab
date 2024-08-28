const express = require('express')
const app = express()

// Exercise 1: Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.
// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.
// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”


app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello there, ${name}!`);
});


// Exercise 2: Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.
// Examples: Matches routes like /roll/6 or /roll/20.
// Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.
// Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    res.send('You must specify a number.')

});


































app.listen(3000, () => {
    console.log('Listening on port 3000')
});