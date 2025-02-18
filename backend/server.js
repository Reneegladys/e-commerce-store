const app = require ('./app')
require('dotenv').config();



const PORT = process.env.PORT || 5001

console.log('PORT:', process.env.PORT);


app.listen (PORT, () => {
    console.log (`server is running on PORT: ${PORT}`)

})

