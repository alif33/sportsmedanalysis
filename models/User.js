import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: { 
      type: String, 
      // required: true
    },
    firstName: {
      type: String, 
    },
    lastName: {
      type: String, 
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
    },
    _players: {
      type: Array,
      default: []
    },
    _teams: {
      type: Array,
      default: []
    },
    _bookmarks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }]
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);

