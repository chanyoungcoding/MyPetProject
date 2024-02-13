const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1024,
  },
  img: {
    type: String,
    default: ''
  },
  petName: {
    type: String,
    default: ''
  },
  selectedDate: {
    type: Date,
    default: ''
  },
  petFood: {
    type: [
      {
        foodName: String,
        foodPossible: String,
        foodImage: String,
      }
    ],
    default: []
  },
  petBuilding: {
    type: [
      {
        content: String,
        address: String,
        phoneNumber: String,
      }
    ],
    default: []
  },
}, {
  timestamps: true,
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel