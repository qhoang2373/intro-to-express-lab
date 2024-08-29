const express = require('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



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

    if (isNaN(number)) {
        res.send('You must specify a number.')
    } else {
        const Number = Math.floor(Math.random() * (number + 1));
        res.send(`You rolled a ${Number}.`)
    }
});


// Exercise 3: I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>
// Examples: Mathes routes such as /collectibles/2 or /collectibles/0


app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;

    if (isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!')
    } else {
        const collectible = collectibles[index];
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
    }
});

// Exercise 4: Filter Shoes by Query Parameters
// Task: Create a route /shoes that filters the list of shoes based on query parameters.

// Query Parameters:

// min-price: Excludes shoes below this price.
// max-price: Excludes shoes above this price.
// type: Shows only shoes of the specified type.
// No parameters: Responds with the full list of shoes.


app.get('/shoes', (req, res) => {
  const minPrice = (req.query.min_price)
  const maxPrice = (req.query.max_price)
  const type = (req.query.type)

  const filteredShoes = shoes.filter(shoe => {
      let keep = true
      if(minPrice && shoe.price < minPrice) {
          keep = false
      }
      if(maxPrice && shoe.price > maxPrice) {
          keep = false
      }
      if(type && shoe.type !== type) {
          keep = false
      }
      return keep
  })

  res.json(filteredShoes)
})

// Answers
// localhost:3000/shoes will show all shoes if there is no parameter
// localhost:3000/shoes?min-price=50 will exclude shoes below this price
// localhost:3000/shoes?max-price=500 will exclude shoes above this price
// localhost:3000/shoes?min-price=15&max-price=1000&type=sneaker 




app.listen(3000, () => {
    console.log('Listening on port 3000')
});