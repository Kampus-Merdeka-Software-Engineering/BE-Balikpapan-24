const  barangService  = require('../services/barangService');

async function getBarangs(req, res) {
    const barangs = await barangService.getAllBarangs();
    res.status(200).json(barangs);
}


module.exports = {
    getBarangs
};