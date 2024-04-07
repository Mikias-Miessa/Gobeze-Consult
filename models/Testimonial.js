const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  description: {
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
const Test = mongoose.models.Test || mongoose.model('Test', testSchema);

export default Test;
