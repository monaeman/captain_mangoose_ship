const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model; // shorthand for model function

const logsSchema = new Schema(
  {
    title: { type: String },
    entry: { type: String },

    shipIsBroken : Boolean

    // likes: { type: Number, default: 0 },
    //sponsored: { type: Boolean, default: false },
  },
  { timestamps: true }
);

{
}
const log = model("log", logsSchema);
module.exports = log;
