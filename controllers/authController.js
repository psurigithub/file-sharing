const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
require('dotenv').config();


// Client Signup
exports.signup = async (req, res) => { 
  const { username, password, email, userType } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      userType,
    });
    
    const token = jwt.sign({ id: newUser._id, userType: newUser.userType }, process.env.JWT_SECRET);
    res.json({ message: 'Signup successful', token });
  } catch (error) {
    res.status(500).json({ 'Signup failed: ' : error });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
