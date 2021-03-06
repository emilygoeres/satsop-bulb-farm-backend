const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantingSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Password is Required",
  },
  text: {
    type: String,
    trim: true,
  },
  order: {
    type: Number,
    trim: true,
    default: -1
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
      type: Date,
      default: Date.now
  }
});

const PlantingInstruction = mongoose.model("PlantingInstruction", PlantingSchema);

module.exports = PlantingInstruction;
