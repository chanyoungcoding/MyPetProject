const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
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
});

mongoose.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);