const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    id: { type: Number, required: true },
    courseName: { type: String, required: true },
    teacher: { type: String, required: true },
    courseLength: { type: String, required: true },
    courseDescription: { type: String, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Courses", Course);
