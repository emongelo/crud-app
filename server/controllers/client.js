const utils = require('../utils/writer.js');
const ClientService = require('../service/ClientService');
const ProviderService = require('../service/ProviderService');

module.exports.delClient = function delClient(req, res, next) {
  const name = req.swagger.params.name.value;

  ClientService.delClient(name)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getAll = function getAll(req, res, next) {
  Promise.all([
    ClientService.getAll(),
    ProviderService.getAll(),
  ]).then(([clients, providers]) => {
    const result = {
      clients,
      providers,
    };

    console.log(result);

    utils.writeJson(res, result);
  }).catch((result) => {
    utils.writeJson(res, result);
  });
};

module.exports.getOne = function getOne(req, res, next) {
  const name = req.swagger.params.name.value;
  ClientService.getOne(name)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.save = function save(req, res, next) {
  const client = req.swagger.params.client.value;
  ClientService.save(client)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.update = function update(req, res, next) {
  const name = req.swagger.params.name.value;
  const client = req.swagger.params.client.value;
  ClientService.update(name,client)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
