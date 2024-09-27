const express = require('express'); 
const router = express.Router();
const Controllers = require('../controllers')

// NOTE CRUD Methods

router.get("/", (req, res) => {
    Controllers.orderController.getOrders(res)
});

router.get("/:id", (req, res) => {
    Controllers.orderController.getOrderById(req, res)
});

router.post('/create', (req, res) => {
    Controllers.orderController.createNewOrder(req.body, res)
});

router.put("/update/:id", (req, res) => {
    Controllers.orderController.updateOrder(req, res)
});

router.delete("/delete/:id", (req, res) => {
    Controllers.orderController.deleteOrder(req, res)
});

module.exports = router;