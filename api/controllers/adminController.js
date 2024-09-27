"use strict";

const Models = require("../models");

const getAdmins = (res) => {
    Models.Admin.findAll({})
      .then((data) => {
        res.send({ result: 200, datasheet: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

module.exports = {
  getAdmins,
};