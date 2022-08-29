const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
	carname: {
		type: String,
		required: true
	},
	carmodel: {
		type: String,
		required: true
	},
	platenumber: {
		type: String,
		required: true
	},
	carimage: {
		type: String,
		required: true,
		default: "asasdas"
	}
})

module.exports = mongoose.model('Asset', AssetSchema)