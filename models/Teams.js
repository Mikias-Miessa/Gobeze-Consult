const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const teamsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
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
const Teams = mongoose.models.Teams || mongoose.model("Teams", blogSchema);

export default Teams;
