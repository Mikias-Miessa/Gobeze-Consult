const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
