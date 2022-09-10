const express = require("express");
const router = express.Router();
const ActivityLogs = require('../models/logs')

// GET ALL ACTIVITY LOGS
router.get("/", async (req, res) => {
	try {
		const logs = await ActivityLogs.find();
		res.json(logs)
	} catch (err) {
		res.json({ message: err.message })
	}
})

// ADD NEW ASSETS
router.post("/add-log", async (req, res) => {
	const log = new ActivityLogs(req.body)
	try {
		const newLog = await log.save()
		res.status(200).json(newLog);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

module.exports = router;