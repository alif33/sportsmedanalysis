import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: { 
      type: String, 
      // required: true
    },
    fullName: {
      type: String, 
    },
    fanduelUsername: {
      type: String
    },
    draftKingsUsername: {
      type: String
    },
    email: { 
      type: String, 
      required: true,
      unique: true
    },
    password: { 
      type: String, 
      required: true 
    },
    tags: {
      type: Array
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);

