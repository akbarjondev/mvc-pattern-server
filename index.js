const express = require('express')
const Home = require('./src/Controllers/Home')
const CONFIG = require('./src/config')

const app = express()

app.get('/', Home.GET)


app.listen(CONFIG.PORT, () => console.log(`Server ready at http://localhost:${CONFIG.PORT}`))