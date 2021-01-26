const about = require('./../Models/about')

const GET = (req, res) => {
	res.send(about)
}

module.exports.GET = GET
