const Client = require('../models/Client');

/**
 * delete a client
 *
 * name String Client name
 * returns GeneralResponse
 **/
exports.delClient = function (name) {
  return new Promise((resolve, reject) => {
    Client.remove({
      name,
    }, (err) => {
      if (err) {
        reject(err);
      }

      resolve({
        success: true,
      });
    });
  });
};


/**
 * get the clients list
 *
 * returns GetClientsListResponse
 **/
exports.getAll = function () {
  return new Promise((resolve, reject) => {
    Client.find({}, 'name email phone providers', (error, clients) => {
      if (error) {
        reject(error);
      }

      resolve(clients);
    }).sort({ _name: -1 });
  });
};


/**
 * get a client
 *
 * name String 
 * returns GetClientResponse
 **/
exports.getOne = function (name) {
  return new Promise((resolve, reject) => {
    Client.findByName(name, (error, client) => {
      if (error) {
        reject(error);
      }
      resolve(client);
    });
  });
};


/**
 * add a new client to the list
 *
 * client Client Client properties
 * returns GeneralResponse
 **/
exports.save = function (data) {
  return new Promise((resolve, reject) => {
    const newClient = new Client({
      name: data.name,
      email: data.email,
      phone: data.phone,
      providers: data.providers,
    });

    newClient.save((error) => {
      if (error) {
        reject(error);
      }
      resolve({
        success: true,
      });
    });
  });
};

/**
 * update a client
 *
 * name String Movie name
 * client Client Client object
 * returns GeneralResponse
 **/
exports.update = function (name, data) {
  return new Promise((resolve, reject) => {
    Client.findByName(name, (error, client) => {
      if (error) {
        reject(error);
      }

      client.name = name;
      client.email = data.email;
      client.phone = data.phone;
      client.providers = data.providers;

      client.save((err) => {
        if (err) {
          reject(err);
        }
        resolve({
          success: true,
        });
      });
    });
  });
};
