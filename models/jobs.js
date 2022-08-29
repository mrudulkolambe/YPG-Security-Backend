const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
	selectaddress: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	jobno: {
		type: String,
		required: true,
		unique: true
	},
	zone: {
		type: String,
		required: true,
		unique: true
	},
	latitude: {
		type: String,
		required: true
	},
	longitude: {
		type: String,
		required: true
	},
	clientname: {
		type: String,
		required: true
	},
	clientphonenumber: {
		type: String,
		required: true,
	},
	remark: {
		type: String,
	},
	timestamp: {
		type: String,
		required: true
	},
})

module.exports = mongoose.model('Jobs', JobsSchema)