const app = require("../app");
const Agent = require("./../models/agentModel");

exports.getAllAgents = async (req, res) => {
  try {
    const agent = await Agent.find();
    res.status(200).json({
      status: "sucess",
      length: agent.length,
      data: agent,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createAgent = async (req, res) => {
  try {
    const newAgent = await Agent.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        agent: newAgent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAgent = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    res.status(200).json({
      status: "sucess",
      data: {
        agent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateTours = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        agent,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};
