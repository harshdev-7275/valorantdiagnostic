const express = require("express");
const agentController = require("./../controllers/agentController");

const router = express.Router();

router
  .route("/")
  .get(agentController.getAllAgents)
  .post(agentController.createAgent);

module.exports = router;
