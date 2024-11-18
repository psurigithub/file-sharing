require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const opsRoutes = require('./routes/opsRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

connectDB();

app.use('/ops', opsRoutes);
app.use('/client', clientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
