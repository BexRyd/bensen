const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Apply = new Schema(
  {
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    education: { type: String, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Apply", Apply);
