// // dbConnect.js
// const mongoose = require('mongoose');
// const uri = process.env.ATLAS_URI;

// const clientOptions = {
//   serverApi: { version: '1', strict: true, deprecationErrors: true },
// };

// async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   try {
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } catch (error) {
//     console.error('Error connecting to MongoDB', error);
//   }
// }

// module.exports = dbConnect;

import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
