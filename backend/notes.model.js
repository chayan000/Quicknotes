const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    note: { type: String, required: true },
},
{
timestamps: true
}
);

const notes = mongoose.model("notes", notesSchema);
module.exports = notes;