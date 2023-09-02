const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Agent = require("./../models/agentModel");

dotenv.config({ path: "./../config.env" });
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true, // Add this line if needed
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"));

const agents = JSON.parse(fs.readFileSync(`${__dirname}/agent.json`, "utf-8"));

//Import data int db
const importData = async () => {
  try {
    await Agent.create(agents);
    console.log("Data successfully loaded!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Agent.deleteMany();
    console.log("Data successfully deleted!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
