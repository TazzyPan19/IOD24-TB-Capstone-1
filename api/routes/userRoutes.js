const express = require('express'); 
const router = express.Router();
const Controllers = require('../controllers')

// NOTE CRUD Methods

router.get("/", (req, res) => {
    Controllers.userController.getUsers(res)
});

router.get("/:id", (req, res) => {
    Controllers.userController.getUserById(req, res)
});

router.post("/create", (req, res) => {
    Controllers.userController.createNewUser(req.body, res)
});

router.put("/update/:id", (req, res) => {
    Controllers.userController.updateUser(req, res)
});

router.delete("/delete/:id", (req, res) => {
    Controllers.userController.deleterUser(req, res)
});

module.exports = router;