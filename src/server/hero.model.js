const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    uid: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  {
    collection: 'Heroes2' /* * existing collection with old schema will cause problem ! */
  }
);

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;