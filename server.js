const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors())

app.use(express.json())

const employeeRouter = require('./routes/employee')
const assetRouter = require('./routes/asset')
const jobsRouter = require('./routes/jobs')
const LogsRouter = require('./routes/activityLog')
const AlarmResponse = require('./routes/alarmresponse')


app.use("/employee", employeeRouter)
app.use("/assets", assetRouter)
app.use("/jobs", jobsRouter)
app.use("/logs", LogsRouter)
app.use("/alarm", AlarmResponse)

mongoose.connect(`${process.env.MONGODB_CONNECTION_URI}`, { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", (err) => {
	console.error(err);
})
db.once('open', () => {
	console.log("Database Connected!");
})
app.listen(8080, () => {
	console.log("server started on port 8080");
})