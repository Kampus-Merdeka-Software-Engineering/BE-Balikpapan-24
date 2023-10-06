const  commentService  = require('../services/commentService');

async function getComments(req, res)  {
  const comments = await commentService.getAllComments();

  res.status(200).json(comments);
}


async function createComment(req, res) {
    const comment = req.body;
  
    const createdComment = await commentService.createComment(comment);
  
    res.status(201).json({
      message: 'comment created'
    });
  }

  module.exports = {
    getComments,
    createComment
};