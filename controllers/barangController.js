async function getBarangs(req, res) {
    console.log("masuk ke path /");
    res.json({ name : 'OK'});
}

module.exports = {
    getBarangs
};