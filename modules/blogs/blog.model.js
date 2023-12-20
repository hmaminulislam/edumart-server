const { Schema, default: mongoose } = require("mongoose");

const blogsSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  authorName: { type: String, required: true },
  description: { type: String, required: true },
  blockquote: { type: String, required: true },
  blockquote: { type: String, required: true },
  during: { type: String, required: true },
  programs: [{ title: { type: String, required: true } }],
  conclusion: { type: String, required: true },
  category: { type: String, required: true },
});

const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs;
