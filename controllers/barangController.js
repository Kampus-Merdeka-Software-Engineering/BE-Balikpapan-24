const { barangService } = require('../services');

async function getBarangs(req, res) {
    const barangs = await barangService.getAllBarangs();
    res.status(200).json(barangs);
}

module.exports = {
    getBarangs
};