const express = require("express");
const router = express.Router();
const Employee = require('../models/employee')

// MIDDLEWARE
const findEmployee = async (req, res, next) => {
	let employee;
	try {
		employee = await Employee.findById(req.params.id)
		if (employee == null) {
			return res.status(400).json({ message: "Employee Not Found" })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
	res.employee = employee;
	next();
}


//GET ALL EMPLOYEES
router.get("/", async (req, res) => {
	try {
		const employees = await Employee.find();
		res.json(employees)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//GET EMPLOYEE WITH ID
router.get("/:id", findEmployee, (req, res) => {
	try {
		res.json(res.employee)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//CREATE EMPLOYEE
router.post("/add-employee", async (req, res) => {
	const employee = new Employee(req.body)
	try {
		const newEmployee = await employee.save()
		res.status(200).json(newEmployee);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

//UPDATE EMPLOYEE
router.patch("/:id", async (req, res) => {
	try {
		const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
		res.status(200).json(updatedEmployee)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//DELETE EMPLOYEE
router.delete("/:id", async (req, res) => {
	try {
		await res.employee.remove()
		res.json({ message: "Employee Deleted!" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router;