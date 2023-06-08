const jwt = require('jsonwebtoken');



exports.generateToken = (userId, secretKey) => {
    const Payload = { userId };

    const token = jwt.sign(Payload, secretKey, { expiresIn: "1h" });
    return token;
};

// const userId = '123456789';
// const secretKey = 'mySecretKey';

// const token = generateToken(userId, secretKey);
// console.log('Generated JWT token:', token);