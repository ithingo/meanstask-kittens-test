const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection && schema
let Kitten = new Schema({
  kitten_name: { type: String },
  kitten_breed: { type: String },
  country: { type: String },
  kitten_parents: { type: Array },
  kitten_dob: { type: Date },
}, {
  collection: 'kittens'
});

module.exports = mongoose.model('Kitten', Kitten);