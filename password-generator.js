const generatePassword = require('generate-password');

const password = generatePassword.generate({
    length: 15,
    numbers: true
});
console.log('Generated Password:', password);