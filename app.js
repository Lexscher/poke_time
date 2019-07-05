// Require dependencies
const express = require('express');
const Pokemons = require('./api/Pokemon');
// Call express
const app = express();
// Set our server
const PORT = 3000
// set view engine to ejs
app.set('view engine', 'ejs');

// Home Page
app.get('/', (request, response) => {
    response.send(`Hello Poke-World!`)
});

// INDEX PAGE - show all pokemon 
app.get('/pokemons', (request, response) => {
    // Use our getAll method
    Pokemons.getAll().then(pokeList => {
        // Then render the 'Index' view, and pass it the array of pokemon returned from our Promise.
        response.render('index', {pokemons: pokeList.results})
    }).catch(err => console.log(err.message))
});

// SHOW PAGE - show one pokemon
app.get('/pokemons/:id', (request, response) => {
    // Get id of the pokemon from the parameter
    const id = parseInt(request.params.id);
    // pass id as an argument to getOne pokemon
    Pokemons.getOne(id).then(pokemonInfo => {
        response.render('show', { pokemon: pokemonInfo})
    }).catch(err => console.log(err.message))
});


// run server
app.listen(
    PORT, () => console.log(
    `Express Application running on PORT ${PORT}. You better go catch it!!`
    )
);


