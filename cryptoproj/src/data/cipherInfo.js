export const cipherInfo = {
    Caesar: {
      title: 'Caesar Cipher',
      about: `The Caesar cipher is one of the most well-known substitution ciphers. A substitution cipher replaces each letter based on a key. It is also called a "shift cipher" because each letter moves a fixed number of places in the alphabet. 
      For example, with a shift of 3, "A" becomes "D," "B" becomes "E," and so on. Since the same key is used for both encryption and decryption, the Caesar cipher is a symmetric cryptosystem.
  A well-known variant is ROT13, which uses a shift of 13. ROT13 is often used for simple obfuscation rather than actual encryption.`,
      encrypt: `1. Choose a shift value (key).
  2. Shift each letter forward by the key value. This can be done by using a Caesar cipher wheel, a lookup table, or a computer program. Alternatively, convert letters to numbers, add the shift value, then convert back.`,
      decrypt: `1. Use the shift value (key).
  2. Shift each letter backward by the key value. This reverses the encryption process.`,
      history: `The Caesar cipher is named after Julius Caesar, who used it for securing military communications. Caesar reportedly used a shift of three to encode his messages. His successor, Augustus, simplified it by shifting letters by only one position. Today, the Caesar cipher is considered weak due to its limited number of possible shifts.`,
      solving: `How does one solve a Caesar cipher without the key? There are only 25 possible different shifts to be used in a Caesar cipher.  This comes from the fact that there are only 26 letters, but a shift of 26 would encode back to the same letter, rendering it useless.  For this reason, the Caesar cipher is not secure.  A common technique for breaking the Caesar cipher is to brute force the message by trying every possible key.  This is easily done with any kind of computer program.  Another common technique is to use frequency analysis to count how often each letter appears in a message, and compare this to the frequency of letters that usually appear in a language.  This can be made more robust by also looking at the frequency of letter pairs.  Usually, the letters “E” and “T” appear commonly in most sentences, which can give clues as to what a word might be.  One can make their Caesar cipher slightly more difficult to crack by removing any extraneous characters such as punctuation marks or spaces, which would make it more difficult for a decrypter to pull out individual words to break down the code. `
    },
  
    Vigenere: {
      title: 'Vigenère Cipher',
      about: `The Vigenère cipher is a polyalphabetic substitution cipher. Unlike the Caesar cipher, which shifts letters by a set value, the Vigenère cipher uses a repeating key to determine the shift for each letter.`,
      encrypt: `1. Choose a keyword.
  2. Repeat the keyword over the plaintext.
  3. Shift each letter forward based on its corresponding keyword letter.`,
      decrypt: `1. Use the keyword.
  2. Reverse each shift using the corresponding keyword letter.`,
      history: `The Vigenère cipher was long considered unbreakable until the 19th century, when cryptographers developed techniques using frequency analysis to crack it.`,
      solving: `Despite its complexity, the Vigenère cipher can be solved using pattern recognition and modern computing techniques.`
    },
  
    Atbash: {
      title: 'Atbash Cipher',
      about: `The Atbash cipher is a simple substitution cipher that reverses the alphabet; A becomes Z, B becomes Y, C becomes X, and so on. It uses a fixed transformation and does not require an encryption key.`,
      encrypt: `1. Replace each letter with its reverse counterpart in the alphabet.
     - Example: "HELLO" becomes "SVOOL".
  2. Since Atbash follows a fixed rule, encryption and decryption work the same way.`,
      decrypt: `1. Apply the same transformation again.
     - Example: "SVOOL" becomes "HELLO".
  2. The alphabet is mirrored, so Atbash is self-reversing.`,
      history: `Atbash originated in ancient Hebrew and was used in biblical texts. It is one of the oldest known ciphers, dating back thousands of years.`,
      solving: `Since Atbash has only one possible transformation, it is instantly reversible.`
    },
  
    A1Z26: {
      title: 'A1Z26 Cipher',
      about: `The A1Z26 cipher is a basic numerical substitution cipher where each letter is replaced by its position in the alphabet.`,
      encrypt: `1. Convert each letter to its numeric equivalent.
     - Example: "HELLO" becomes "8 5 12 12 15".`,
      decrypt: `1. Convert each number back to its corresponding letter using an alphabet chart.
     - Example: "8 5 12 12 15" becomes "HELLO".`,
      history: `The A1Z26 cipher is a simplistic encoding technique used for basic cryptographic puzzles and educational purposes.`,
      solving: `Since A1Z26 directly maps letters to numbers, breaking it is straightforward.`
    },
  
    Playfair: {
      title: 'Playfair Cipher',
      about: `The Playfair cipher is a digraph substitution cipher that encodes pairs of letters using a 5×5 grid keyed by a keyword.`,
      encrypt: `1. Create a 5×5 key square using a keyword.
  2. Break the plaintext into pairs of letters (digraphs).
  3. Replace each pair based on their grid positions.`,
      decrypt: `1. Reverse the grid-based transformations from encryption.
  2. Restore each letter pair to its original form.`,
      history: `The Playfair cipher was invented in 1854 and used during World War I.`,
      solving: `Breaking the Playfair cipher requires frequency analysis of digraphs and grid reconstruction.`
    },
  
    Polybius: {
      title: 'Polybius Square Cipher',
      about: `The Polybius square cipher replaces letters with two-digit coordinates from a 5×5 matrix.`,
      encrypt: `1. Construct a 5×5 matrix with letters.
  2. Replace each letter with its grid coordinates (row and column).`,
      decrypt: `1. Use the matrix coordinates to retrieve the original letters.`,
      history: `Developed by Polybius, a Greek historian in the 2nd century BC, for military signals.`,
      solving: `Breaking it involves pattern recognition of number pairs and grid reconstruction.`
    },
  
    Autokey: {
      title: 'Autokey Cipher',
      about: `The Autokey cipher is a variation of the Vigenère cipher where the plaintext is appended to the keyword to create a longer encryption key.`,
      encrypt: `1. Choose a keyword.
  2. Append the plaintext to extend the key.
  3. Shift each letter based on the new key.`,
      decrypt: `1. Use the key to decrypt the first few letters.
  2. Recover the rest using the decrypted portion.`,
      history: `The Autokey cipher was introduced to strengthen the Vigenère cipher.`,
      solving: `Breaking the Autokey cipher involves using techniques such as the Kasiski examination and statistical analysis.`
    }
  };
  