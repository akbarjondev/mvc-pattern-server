const express = require('express')
const Home = require('./src/Controllers/Home')
const About = require('./src/Controllers/About')
const Portfolio = require('./src/Controllers/Portfolio')
const CONFIG = require('./src/config')

const app = express()

app.use(express.static('public'))

app.get('/', Home.GET)
app.get('/index.html', Home.GET)
app.get('/about.html', About.GET)
app.get('/portfolio.html', Portfolio.GET)

app.listen(CONFIG.PORT, () => console.log(`Server ready at http://localhost:${CONFIG.PORT}`))
