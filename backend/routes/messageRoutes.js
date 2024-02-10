const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { sendMessage, allMessages } = require('../controllers/messageController');

const router = express.Router()


router.route('/').post(protect,sendMessage)
router.route('/login').get(protect,allMessages)


module.exports = router;