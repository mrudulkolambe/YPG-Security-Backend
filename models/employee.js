const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phonenumber: {
		type: String,
		required: true
	},
	drivinglicense: {
		type: String,
		required: true
	},
	securitylicense: {
		type: String,
		required: true
	},
	profileimage: {
		type: String,
		required: true,
		default: "profileimage"
	},
	documentimage: {
		type: String,
		default: "documentimage"
	},
	address: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true,
		default: "Idle"
	}
})

module.exports = mongoose.model('Employee', EmployeeSchema)