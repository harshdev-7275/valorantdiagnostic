const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Agent = require("./models/agentModel");
const agentRouter = require("./routes/agentRoutes");
app.use(express.json());

//routes
app.use("/agents", agentRouter);


module.exports = app;
