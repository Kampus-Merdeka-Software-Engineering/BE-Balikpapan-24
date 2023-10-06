//API untuk getBarang
const express = require('express');
const  barangController  = require('../controllers/barangController');
const router = express.Router();

// get all barang
router.get('/barangs', barangController.getBarangs);

module.exports = router;