const { prisma } = require('../config/prisma');

async function getAllComments() {
  try {
    const comments = await prisma.comment.findMany();

    return comments;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

async function createComment(comment) {
  try {
    const mappedComment = {
      data: {
        username : comment.username,
        isi_comment : comment.isi_comment
      }
    };

    const createdComment = await prisma.comment.create(mappedComment);

    return createdComment
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getAllComments,
  createComment
};