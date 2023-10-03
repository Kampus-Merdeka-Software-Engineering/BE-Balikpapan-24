//API untuk getBarang
const express = require('express');
const { barangController } = require('../controllers');
const router = express.Router();

// get all barang
router.get('/barangs', barangController.getBarangs);
// router.post('/books', bookController.createBook);



module.exports = router;