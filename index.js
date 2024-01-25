// index.js

const argon2 = require('argon2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getHash() {
  try {
    // Get input from the user
    rl.question('Enter the string to hash: ', async (inputString) => {
      // Hash the input string
      const hash = await argon2.hash(inputString);
      console.log('Hash:', hash);

      // Close the readline interface
      rl.close();
    });
  } catch (err) {
    console.error('Error hashing the string:', err);
    rl.close();
  }
}

// Run the function to get the hash
getHash();
