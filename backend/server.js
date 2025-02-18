const app = require ('./app')
const dotenv = require ('dotenv')



const PORT = process.env.PORT || 5001

app.listen (PORT, () => {
    console.log (`server is running on PORT: ${PORT}`)

})

