const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model; // shorthand for model function

const logsSchema = new Schema(
  {
    title: { type: String,  },
    entry: { type: String , },

    shipIsBroken: Boolean,
  },
  { timestamps: true }
);

{
  /*const logs = [
        {
            title: " hawaii ",
            shipIsBroken : true,
        }
    ]*/
}
const logs = model("logs", logsSchema);
module.exports = logs;
