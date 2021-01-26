const about = require('./../Models/about')
const path = require('path')

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, '../View', '/about.html'))
}

module.exports.GET = GET
