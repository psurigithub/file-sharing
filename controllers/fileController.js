const multer = require('multer');
const path = require('path');
const fs = require('fs');
const File = require('../models/File'); 
const authenticateOpsUser = require('../middleware/authMiddleware'); 
const nodemailer = require('nodemailer');
const User = require('../models/User'); 


const uploadDir = path.join(__dirname, '..', 'upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});


const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only pptx, docx, and xlsx files are allowed'));
    }
    cb(null, true);
  }
});


exports.uploadFile = [authenticateOpsUser, upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }


  console.log('Uploaded file:', req.file);

  try {
    const uploadedFile = new File({
      fileName: req.file.originalname,
      filePath: req.file.path,
      uploadedBy: req.user._id, 
    });

    const savedFile = await uploadedFile.save(); 
    
    res.status(201).json({
      message: 'File uploaded successfully',
      fileId: savedFile._id, 
      file: savedFile
    });
  } catch (error) {
    console.error('Error saving file to database:', error);
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
}];


// Download File
exports.downloadFile = async (req, res) => {
  const { fileId } = req.params;

  try {
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const encryptedLink = crypto.randomBytes(16).toString('hex'); 

    
    res.json({
      downloadLink: `/download/${encryptedLink}?fileId=${fileId}`,
      message: 'File is ready for download',
    });
  } catch (error) {
    console.error('File download error:', error);
    res.status(500).json({ message: 'Error generating download link', error });
  }
}; 



exports.listFiles = async (req, res) => {
  try {
    const files = await File.find();  
    res.status(200).json({ files });
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Error fetching files', error: error.message });
  }
};



exports.verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  try {
    const user = await User.findOne({ verificationToken });
    
    if (!user) {
      return res.status(404).json({ message: 'Invalid verification link' });
    }


    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ message: 'Error verifying email', error: error.message });
  }
};
