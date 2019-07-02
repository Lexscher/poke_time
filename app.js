// Require dependencies
const express = require('express')
const axios = require('axios')

// Call express
const app = express()

// Set our server
const PORT = 3000

// Just show something random on our home page
app.get('/', (request, response) => {
    response.send("Hello Poke-World!")
});



// run server
app.listen(
    PORT, () => console.log(
    `Express Application running on PORT ${PORT}. You better go catch it!!`
    )
);


