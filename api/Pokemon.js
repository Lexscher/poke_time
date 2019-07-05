const fetch = require('node-fetch');

// set url endpoints
    // url for all pokemon
const urlForAll = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    // url for one pokemon
const urlForOne = 'https://pokeapi.co/api/v2/pokemon';

// Define our pokemons object
const Pokemons = {};


// Make methods to interact with the urls
    // All Pokemon
Pokemons.getAll = () => {
    // Fetch the url, then parse the response into JSON
    return fetch(urlForAll).then(response => response.json());
};
    // One pokemon
Pokemons.getOne = id => {
    return fetch(`${urlForOne}/${id}`).then(response => response.json());
};

// export Pokemons so that we can use it in app.js
module.exports = Pokemons;