const mongoose = require('mongoose');

const MapInformationSchema = new mongoose.Schema({
  name: String,
  buildingName: String,
  address: String,
  latitude: Number,
  longitude: Number,
  phoneNumber: String
})

const MapInforModel = mongoose.model('MapInformation', MapInformationSchema);

module.exports = MapInforModel;