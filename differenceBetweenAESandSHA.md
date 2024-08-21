AES (Advanced Encryption Standard) and SHA (Secure Hash Algorithm) serve different purposes in cryptography, and they have distinct functions:

### AES (Advanced Encryption Standard)
- **Purpose**: AES is a symmetric encryption algorithm used to encrypt and decrypt data. Its primary function is to ensure the confidentiality of the data by transforming it into an unreadable format that can only be reversed (decrypted) with the correct key.
- **Type**: Symmetric key encryption algorithm.
- **Key**: Uses a secret key that is the same for both encryption and decryption. Key lengths are typically 128, 192, or 256 bits.
- **Process**: AES takes plaintext (e.g., a document or a message) and a key as input and produces ciphertext (encrypted data). The ciphertext can be decrypted back into the original plaintext using the same key.
- **Use Cases**: Securing data in storage (e.g., encrypting files), securing data in transit (e.g., HTTPS, VPNs), and more.

### SHA (Secure Hash Algorithm)
- **Purpose**: SHA is a cryptographic hash function used to produce a fixed-size hash value (digest) from input data. It is primarily used for data integrity, verifying that data has not been altered.
- **Type**: Hash function.
- **Key**: SHA functions do not use keys. Instead, they produce a deterministic output (hash) from the input data.
- **Process**: SHA takes input data of any size and produces a fixed-size output, typically 256 bits (in the case of SHA-256). The output is unique to the input, meaning even a small change in the input will produce a vastly different hash.
- **Use Cases**: Password hashing, digital signatures, verifying data integrity, and more.

### Key Differences:
- **Function**: AES is for encryption (confidentiality), while SHA is for hashing (integrity).
- **Reversibility**: AES is reversible (you can decrypt what you encrypt), while SHA is not (hashing is a one-way process, and you can't "unhash" the data).
- **Use of Keys**: AES requires a key for both encryption and decryption, while SHA does not use a key.

In summary, AES is used when you need to securely encrypt data, while SHA is used when you need to ensure data has not been tampered with by generating a unique hash.

&mdash; *ChatGPT*

<br>
