const express = require("express");
const router = express.Router();
const AlarmResponse = require('../models/alarmresponse')

// GET ALL ALARM RESPONSE
router.get("/", async (req, res) => {
	try {
		const alarmresponses = await AlarmResponse.find();
		res.json(alarmresponses)
	} catch (err) {
		res.json({ message: err.message })
	}
})

// ADD NEW ALARM RESPONSE
router.post("/add-response", async (req, res) => {
	const alarmresponse = new AlarmResponse(req.body)
	try {
		const newAlarmResponse = await alarmresponse.save()
		res.status(200).json(newAlarmResponse);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

module.exports = router;