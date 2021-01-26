const path = require('path')

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, './../View', './portfolio.html'))
}

module.exports.GET = GET
