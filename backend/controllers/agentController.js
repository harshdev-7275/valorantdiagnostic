const app = require("../app");
const Agent = require("./../models/agentModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllAgents = async (req, res, next) => {
  try {
    const agents = await Agent.find();
    res.status(200).json({
      status: "sucess",
      length: agents.length,
      data: agents,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getGroupAgents = async (req, res, next) => {
  try {
    res.send("I  am in");
    // console.log("I am in group");
    // const query = req.query;
    // const agent = await Agent.find({ roles: req.query });

    // res.status(200).json({
    //   status: "success",
    //   data: agent,
    // });
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
exports.deleteAgent = async (req, res) => {
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
