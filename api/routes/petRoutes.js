const express = require('express'); 
const router = express.Router();
const Controllers = require('../controllers')

// NOTE CRUD Methods

router.get("/", (req, res) => {
    Controllers.petController.getPets(res);
});

router.get("/:id", (req, res) => {
    Controllers.petController.getPetById(req, res);
});

router.post("/create", (req, res) => {
    Controllers.petController.createPetList(req.body, res);
});

router.put("/update/:id", (req, res) => {
    Controllers.petController.updatePetListById(req, res);
});

router.delete("/delete/:id", (req, res) => {
    Controllers.petController.deletePetListById(req, res);
});

module.exports = router;