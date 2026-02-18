const bcrypt = require('bcrypt');

// Function to hash a password
exports.hashPassword = async (password) => {
    const saltRounds = 10; // Number of salt rounds (you can adjust this)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Function to compare a password with a hash
exports.comparePassword = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}