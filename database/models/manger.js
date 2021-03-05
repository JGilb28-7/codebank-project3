const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new mongoose.Schema({
// need to build out the Schema
  title: {
    type: String,
    required: true
  },


});

const Manger = mongoose.model("Manager", managerSchema);

module.exports = Manger;