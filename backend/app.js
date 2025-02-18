const express = require ('express');
const app = express ();


app.use (express.json());

// import all the routes
const products = require ('./routes/productRoutes')

app.use ('/api/', products)

module.exports = app