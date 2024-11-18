const mongoose = require('mongoose'); 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection error:', error); 
        process.exit(1); // Exit the process with failure
    }
};  

module.exports = connectDB;