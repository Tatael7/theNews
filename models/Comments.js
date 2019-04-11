const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var NoteSchema = new Schema({
    title: String,
    body: String
});

var Comment = mongoose.model("Comment", NoteSchema);

module.exports = Comment;