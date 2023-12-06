const mongoose = require('mongoose');

const MapInformationSchema = new mongoose.Schema({
  content: String,
  address: String,
  latitude: Number,
  longitude: Number,
  phoneNumber: String
})

const MapInformation = mongoose.model('MapInformation', MapInformationSchema);

module.exports = MapInformation;