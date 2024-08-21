// This script will encrypt a sample string, decrypt it back, and verify that the decrypted data matches the original.
const { encryptData, decryptData } = require("./cryptoUtils");

(async () => {
  const password = "supersecret";
  const originalData = "Hello, World!";

  try {
    // Encrypt the data
    const encryptedData = await encryptData(originalData, password);
    console.log("Encrypted Data:", encryptedData);

    // Decrypt the data
    const decryptedData = await decryptData(encryptedData, password);
    console.log("Decrypted Data:", decryptedData);

    // Check if the decryption matches the original data
    if (originalData === decryptedData) {
      console.log("Test passed: Decrypted data matches the original data.");
    } else {
      console.log("Test failed: Decrypted data does not match the original data.");
    }
  } catch (err) {
    console.error("An error occurred during the test:", err);
  }
})();
