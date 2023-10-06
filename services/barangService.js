// const { prisma } = require('../config/prisma1');
const { prisma } = require('../config/prisma');

async function getAllBarangs() {
  try {
    const barangs = await prisma.barang.findMany();

    return barangs;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}
module.exports = {
    getAllBarangs
  };