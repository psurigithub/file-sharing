const express = require('express');
const auth = require('../middleware/authMiddleware');
const { signup, login } = require('../controllers/authController');
const { downloadFile, listFiles } = require('../controllers/fileController');


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/download/:fileId', downloadFile); 
router.get('/files',listFiles);

module.exports = router;
