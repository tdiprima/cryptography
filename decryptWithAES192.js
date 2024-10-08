// https://blog.logrocket.com/node-js-crypto-module-a-tutorial/
const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// We will first generate the key, as it is dependent on the algorithm.
// In this case for aes192, the key is 24 bytes (192 bits).
// We will use the async `crypto.scrypt()` instead for deciphering.
const key = crypto.scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

// Create decipher with key and iv
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';
decipher.on('readable', () => {
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});

decipher.on('end', () => {
  console.log(decrypted);
  // Prints: some clear text data
});

// The encryption and decryption processes are symmetric, meaning that if you know the key, algorithm, and IV used to encrypt data, you can use the same information to decrypt it.
// In real-world applications, the encrypted string would typically come from an external source (e.g., a file, database, or network), and the script wouldn't "know" it ahead of time.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
decipher.write(encrypted, 'hex');
decipher.end();
