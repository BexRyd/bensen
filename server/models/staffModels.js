const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = new Schema(
  {
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profession: { type: String, required: true },
    email: { type: String, required: true },
    account: { type: Number, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Staff", Staff);
