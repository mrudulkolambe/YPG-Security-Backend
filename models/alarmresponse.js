const mongoose = require("mongoose");

const AlarmResponseSchema = new mongoose.Schema({
	clientname: {
		type: String,
		required: true
	},
	clientaddress: {
		type: String,
		required: true
	},
	attendancenotes: {
		type: String,
		required: true,
	},
	timeon: {
		type: String,
		required: true,
	},
	timeoff: {
		type: String,
		required: true
	},
	jobno: {
		type: String,
		required: true
	},
	zone: {
		type: String,
		required: true
	},
	bureau: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	attendingofficer: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: ""
	},
	timestamp: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('AlarmResponse', AlarmResponseSchema)