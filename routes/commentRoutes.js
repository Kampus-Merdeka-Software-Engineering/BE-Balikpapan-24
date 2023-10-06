//API untuk getComment
const express = require('express');
const  commentController  = require('../controllers/commentController');
const router = express.Router();

// get all comment
router.get('/comments', commentController.getComments);
router.post('/comments', commentController.createComment);



module.exports = router;