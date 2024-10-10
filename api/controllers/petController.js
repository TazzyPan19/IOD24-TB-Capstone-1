"use strict";

const Models = require("../models");

const getPets = (res) => {
    Models.Pet.findAll({})
      .then((data) => {
        res.send({ result: 200, datasheet: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const getPetById = (req, res) => {
  // Models.Pet.findAll(req.body, {
  //   where: { id: req.params.id },
  //   returning: true,
  // })
  Models.Pet.findAll({ where: { id: req.params.id }})
    .then((data) => {
      res.send({ result: 200, datasheet: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createPetList = (data, res) => {
  Models.Pet.create(data).then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePetListById = (req, res) => {
  Models.Pet.update(req.body, {
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

const deletePetListById = (req, res) => {
  Models.Pet.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPets,
  getPetById,
  createPetList,
  updatePetListById,
  deletePetListById
};