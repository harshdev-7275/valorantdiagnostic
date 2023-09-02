const express = require("express");
const agentController = require("./../controllers/agentController");

const router = express.Router();

router
  .route("/")
  .get(agentController.getAllAgents)
  .post(agentController.createAgent);

router
  .route("/:id")
  .get(agentController.getAgent)
  .patch(agentController.updateTours)
  .delete(agentController.deleteAgent);

module.exports = router;
