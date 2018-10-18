const mongoose = require('mongoose');
const { Schema } = mongoose;

const geoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

mongoose.model('geo', geoSchema)

const shopSchema = new Schema({
  name: String,
  geometry: geoSchema
})



mongoose.model('shops', shopSchema);
