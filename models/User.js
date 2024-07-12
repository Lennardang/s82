const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    email: { type: String, unique: true, required: [true, 'Email address is required'] },
    password: { type: String, required: [true, 'Password is required'] }
});

module.exports = mongoose.model('User', userSchema);