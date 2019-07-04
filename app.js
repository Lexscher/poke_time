// Require dependencies
const express = require('express');
const fetch = require('node-fetch');

// Call express
const app = express();

// Set our server
const PORT = 3000

// set view engine to ejs
app.set('view engine', 'ejs');

// set url endpoints
    // url for all pokemon
const urlForAll = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    // url for one pokemon
const urlForOne = `https://pokeapi.co/api/v2/pokemon/`

// Array to store our data
let pokeList = [];

// fetch the url
fetch(urlForAll)
    // parse into json 
    .then(response => response.json())
    // Get the results and assign them to our pokeList
    .then(jsonData => pokeList = jsonData.results)
    // Handle the error
    .catch(err => console.log(err));


// Home Page
app.get('/', (request, response) => {
    response.send(`Hello Poke-World!`)
});

// INDEX PAGE - show all pokemon 
app.get('/pokemons', (request, response) => {
    response.render('index', {pokemons: pokeList})
});

// SHOW PAGE - show one pokemon
app.get('/pokemons/:id', (request, response) => {
    response.render('show')
});



// run server
app.listen(
    PORT, () => console.log(
    `Express Application running on PORT ${PORT}. You better go catch it!!`
    )
);


