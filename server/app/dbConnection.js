const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost:27017/client-crud');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log('Connection Succeeded');
  });
  return db;
}

module.exports.connect = connect;
