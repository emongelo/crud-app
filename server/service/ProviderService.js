const Provider = require('../models/Provider');

/**
 * get the provider list
 *
 * returns GetProvidersListResponse
 **/
exports.getAll = function () {
  return new Promise((resolve, reject) => {
    Provider.find({}, (error, providers) => {
      if (error) {
        reject(error);
      }

      resolve(providers);
    }).sort({ _name: -1 });
  });
};
