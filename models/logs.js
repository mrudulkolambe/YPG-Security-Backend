const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
	logdescription: {
		type: String,
		required: true
	},
	timestamp: {
		type: Date,
		required: true,
		default: Date.now()
	},
})

module.exports = mongoose.model('ActivityLogs', activityLogSchema)