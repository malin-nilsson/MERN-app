require('dotenv').config()

const express = require('express');

// EXPRESS APP
const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

// LISTEN FOR REQUESTS
app.listen(process.env.PORT, () => {
console.log('Listening on port http://localhost:4000');
})