const express = require('express')

const app = express()

const PORT = process.env.PORT || 4001

app.get('/', (_, res) => {
	res.send('Welcome')
})

app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`))