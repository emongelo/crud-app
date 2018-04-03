const mongoose = require('mongoose');

/* eslint prefer-destructuring: off */
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  name: String,
});

const Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;
