// Data from a file is being encrypted in chunks, and each chunk is added to the encrypted string.
// Once all data has been processed, the 'end' event will trigger, and you will have the complete encrypted output.
const crypto = require('crypto');
const fs = require('fs');

// Generate a 256-bit (32 bytes) key using a passphrase and a salt
const passphrase = 'mySecretPassphrase';
const salt = crypto.randomBytes(16);
const key = crypto.scryptSync(passphrase, salt, 32); // 32 bytes key for AES-256-CTR

// Generate a random Initialization Vector (IV)
const iv = crypto.randomBytes(16);

// Create a cipher instance using AES-256-CTR
const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);

let encrypted = '';

// Listen for the 'data' event and accumulate the encrypted chunks
cipher.on('data', (chunk) => encrypted += chunk.toString('hex'));

// Listen for the 'end' event to signify that encryption is complete
cipher.on('end', () => {
  console.log('Encryption complete:', encrypted);
});

// Read data from a file and pipe it through the cipher to encrypt it
const input = fs.createReadStream('input.txt');
input.pipe(cipher);
