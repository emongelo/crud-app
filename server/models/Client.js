const mongoose = require('mongoose');

/* eslint prefer-destructuring: off */
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  providers: [{
    id: Number,
  }],
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
