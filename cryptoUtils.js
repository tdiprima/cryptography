const crypto = require("crypto");

const algorithm = "aes-192-cbc"; // Encryption algorithm
const salt = "salt"; // Salt for key derivation
const keysize = 24; // Key size in bytes for AES-192
const iv = Buffer.alloc(16, 0); // Initialization vector (IV) filled with zeros

/**
 * Encrypts the given data using AES-192-CBC with a password-derived key.
 *
 * @param {string} data - The data to encrypt.
 * @param {string} password - The password used to derive the encryption key.
 * @returns {Promise<string>} - A promise that resolves to the encrypted data in hex format.
 */
const encryptData = async (data, password) => {
  const key = await deriveKey(password); // Derive the key from the password
  const cipher = crypto.createCipheriv(algorithm, key, iv); // Create cipher instance
  let encrypted = "";

  return new Promise((resolve, reject) => {
    cipher.on("data", (chunk) => (encrypted += chunk.toString("hex")));
    cipher.on("end", () => {
      console.log("Encryption complete");
      resolve(encrypted);
    });
    cipher.on("error", (err) => reject(err)); // Handle errors

    cipher.write(data); // Write data to be encrypted
    cipher.end(); // Signal end of encryption process
  });
};

/**
 * Decrypts the given encrypted data using AES-192-CBC with a password-derived key.
 *
 * @param {string} encrypted - The encrypted data in hex format.
 * @param {string} password - The password used to derive the decryption key.
 * @returns {Promise<string>} - A promise that resolves to the decrypted data.
 */
const decryptData = async (encrypted, password) => {
  const key = await deriveKey(password); // Derive the key from the password
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // Create decipher instance
  let decrypted = "";

  return new Promise((resolve, reject) => {
    decipher.on("data", (chunk) => (decrypted += chunk.toString("utf8")));
    decipher.on("end", () => {
      console.log("Decryption complete");
      resolve(decrypted);
    });
    decipher.on("error", (err) => reject(err)); // Handle errors

    decipher.write(encrypted, "hex"); // Write encrypted data to be decrypted
    decipher.end(); // Signal end of decryption process
  });
};

/**
 * Derives a key from the given password using the scrypt algorithm.
 *
 * @param {string} password - The password to derive the key from.
 * @returns {Promise<Buffer>} - A promise that resolves to the derived key.
 */
const deriveKey = (password) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, keysize, (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });
};

module.exports = { encryptData, decryptData };
