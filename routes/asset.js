const express = require("express");
const router = express.Router();
const Asset = require('../models/asset')

// MIDDLEWARE
const findAsset = async (req, res, next) => {
	let asset;
	try {
		asset = await Asset.findById(req.params.id)
		if (asset == null) {
			return res.status(400).json({ message: "Asset Not Found" })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
	res.asset = asset;
	next();
}

// GET ALL ASSETS
router.get("/", async (req, res) => {
	try {
		const assets = await Asset.find();
		res.json(assets)
	} catch (err) {
		res.json({ message: err.message })
	}
})

// ADD ALL ASSETS
router.post("/add-asset", async (req, res) => {
	const asset = new Asset(req.body)
	try {
		const newAsset = await asset.save()
		res.status(200).json(newAsset);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

//GET ASSET WITH ID
router.get("/:id", findAsset, (req, res) => {
	try {
		res.json(res.asset)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//UPDATE ASSET
router.patch("/:id", async (req, res) => {
	try {
		const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true })
		res.status(200).json(updatedAsset)
	} catch (err) {
		res.json({ message: err.message })
	}
})


module.exports = router;