// https://nodejs.org/api/crypto.html
// HMAC (Hash-based Message Authentication Code) SHA256 Example
const { createHmac } = require('node:crypto');

const secret = 'abcdefg'; // This key is used in the HMAC algorithm to produce the hash.
const hash = createHmac('sha256', secret) // Initializes the HMAC algorithm
    .update('I love cupcakes') // Adds the data you want to hash to the HMAC object
    .digest('hex'); // Finalizes the HMAC computation and returns the resulting hash in hexadecimal format
console.log(hash);
