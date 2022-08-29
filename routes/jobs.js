const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobs");

// MIDDLEWARE
const findJobs = async (req, res, next) => {
	let job;
	try {
		job = await Jobs.findById(req.params.id)
		if (job == null) {
			return res.status(400).json({ message: "Job Not Found" })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
	res.job = job;
	next();
}


//GET ALL JOBS
router.get("/", async (req, res) => {
	try {
		const jobs = await Jobs.find();
		res.json(jobs)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//GET JOBS WITH ID
router.get("/:id", findJobs, (req, res) => {
	try {
		res.json(res.job)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//CREATE JOBS
router.post("/add-job", async (req, res) => {
	const job = new Jobs(req.body)
	try {
		const newJob = await job.save()
		res.status(200).json(newJob);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

//UPDATE JOBS
router.patch("/:id", async (req, res) => {
	try {
		const updatedJob = await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true })
		res.status(200).json(updatedJob)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//DELETE JOBS
router.delete("/:id", async (req, res) => {
	try {
		await res.job.remove()
		res.json({ message: "Employee Deleted!" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router;