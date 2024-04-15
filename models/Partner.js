import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema({
  name: {
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
  logo: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Partner =
  mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);

export default Partner;
