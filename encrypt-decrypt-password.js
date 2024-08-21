const crypto = require('crypto');

// Encrypting the Password
function encryptPassword(password, key, iv) {
  // Encrypts the password using aes-256-ctr with the provided key and initialization vector (IV).
  const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  const encryptedPassword = Buffer.concat([cipher.update(password, 'utf8'), cipher.final()]);
  return encryptedPassword.toString('hex');
}

function generateKey(password, salt) {
  // Uses the scryptSync function to derive a 32-byte key from the given password and salt.
  return crypto.scryptSync(password, salt, 32); // 32 bytes key for aes-256-ctr
}

// Usage
const password = 'mySecurePassword';
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(16);

const key = generateKey('mySecretKey', salt);
const encryptedPassword = encryptPassword(password, key, iv);

console.log(`Encrypted Password: ${encryptedPassword}`);
console.log(`IV: ${iv.toString('hex')}`);
console.log(`Salt: ${salt.toString('hex')}`);

// Decrypting the Password
function decryptPassword(encryptedPassword, key, iv) {
  // Decrypts the encrypted password using the same algorithm, key, and IV.
  const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  const decryptedPassword = Buffer.concat([decipher.update(Buffer.from(encryptedPassword, 'hex')), decipher.final()]);
  return decryptedPassword.toString('utf8');
}

// Usage
const decryptedPassword = decryptPassword(encryptedPassword, key, iv);
console.log(`Decrypted Password: ${decryptedPassword}`);

// AES: Advanced Encryption Standard, a widely used encryption algorithm.
// 256: Refers to the key size in bits (256 bits).
// CTR (Counter mode): A mode of operation for block ciphers.
