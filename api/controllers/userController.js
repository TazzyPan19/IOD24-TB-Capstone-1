"use strict";

const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({})
      .then((data) => {
        res.send({ result: 200, datasheet: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const getUserById = (req, res) => {
  // Models.Pet.findAll(req.body, {
  //   where: { id: req.params.id },
  //   returning: true,
  // })
  Models.User.findAll({ where: { id: req.params.id }})
    .then((data) => {
      res.send({ result: 200, datasheet: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createNewUser = (data, res) => {
  Models.User.create(data).then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleterUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleterUser
};