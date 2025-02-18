const app = require ('./app')
const connectDB = require ('./config/db.js')



// setting up config file
require('dotenv').config();

const PORT = process.env.PORT || 5001
console.log('PORT:', process.env.PORT);

//connecting to database
connectDB ()

app.listen (PORT, () => {
    console.log (`server is running on PORT: ${PORT}`)

})

