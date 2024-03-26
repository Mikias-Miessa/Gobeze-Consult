const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
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
const Partner = mongoose.models.Test || mongoose.model("Partner", partnerSchema);

export default Partner;
