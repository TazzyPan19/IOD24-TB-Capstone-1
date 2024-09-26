"use strict";
const Models = require("../models");

const getOrders = (res) => {
    Models.Order.findAll({})
      .then((data) => {
        res.send({ result: 200, datasheet: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const getOrderById = (req, res) => {
  // Models.Pet.findAll(req.body, {
  //   where: { id: req.params.id },
  //   returning: true,
  // })
  Models.Order.findAll({ where: { id: req.params.id }})
    .then((data) => {
      res.send({ result: 200, datasheet: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createNewOrder = (data, res) => {
  Models.Order.create(data).then((data) => {
      res.send({ result: 200, datasheet: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateOrder = (req, res) => {
  Models.Order.update(req.body, {
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

const deleteOrder = (req, res) => {
  Models.Order.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getOrders,
    getOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder
};