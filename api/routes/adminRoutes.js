const express = require('express'); 
const router = express.Router();
const Controllers = require('../controllers')

// NOTE CRUD Methods

router.get("/", (req, res) => {
    Controllers.adminController.getAdmins(res);
});

module.exports = router;