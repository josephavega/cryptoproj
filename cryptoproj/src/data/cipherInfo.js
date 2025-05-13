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
      about: `The Vigenère cipher is a method of encrypting alphabetic text using a series of Caesar ciphers based on the letters of a keyword. Unlike the basic Caesar cipher, which shifts all letters by the same amount, the Vigenère cipher uses a polyalphabetic system—each letter of the plaintext is shifted by a different amount, determined by the corresponding letter in the keyword.
      For example, with the keyword KEY, the first letter is shifted by K (shift of 10), the second by E (shift of 4), the third by Y (shift of 24), then the pattern repeats. Because it uses multiple shifts, the Vigenère cipher is more secure against simple frequency analysis.`,
      encrypt: `1. Choose a keyword (e.g., KEY).
      2. Repeat or cycle the keyword until it matches the length of the plaintext.
      3. Convert each plaintext letter and keyword letter to numbers (A = 0, B = 1, ..., Z = 25).
      4. Add the keyword number to the plaintext number, modulo 26.
      5. Convert the result back to a letter.`,
      decrypt: `1. Use the same keyword.
      2. Convert both ciphertext and keyword letters to numbers.
      3. Subtract the keyword number from the ciphertext number, modulo 26.
      4. Convert the result back to a letter to retrieve the original message.`,
      history: `The cipher was described in the 16th century by Giovan Battista Bellaso, but it was later misattributed to Blaise de Vigenère, whose name it now carries. For centuries, it was considered unbreakable and was even called "le chiffre indéchiffrable" (the indecipherable cipher) by the French. The cipher held strong until Charles Babbage and Friedrich Kasiski independently developed methods for breaking it in the 19th century.`,
      solving: `Breaking the Vigenère cipher without the key is more complex than Caesar’s. Since it uses multiple Caesar ciphers, a single frequency analysis won’t work.
      However, if the keyword length can be determined (e.g., via the Kasiski examination or index of coincidence), then the cipher can be split into several Caesar ciphers, one for each letter of the keyword. Each part can then be cracked using frequency analysis.
      Shorter keywords and repeated patterns in plaintext make it easier to break. To increase security, longer and more random keywords should be used.`
    },    
  
    Atbash: {
      title: 'Atbash Cipher',
      about: `The Atbash cipher is a classic example of a monoalphabetic substitution cipher. It is one of the simplest and oldest known ciphers, dating back to ancient Hebrew scripts. Instead of shifting letters like in the Caesar cipher, the Atbash cipher works by reversing the alphabet.
      That means A becomes Z, B becomes Y, C becomes X, and so on. This pattern continues symmetrically through the alphabet, making encryption and decryption the exact same process.`,
      encrypt: `1. Write out the alphabet in normal order and then in reverse order beneath it.
      2. For each letter in the plaintext, find its reversed counterpart in the alphabet.
      3. Replace each letter with its corresponding reversed letter to form the ciphertext.`,
      decrypt: `1. Since the Atbash cipher is symmetric, decryption is the same as encryption.
      2. Reverse each letter in the ciphertext using the same reversed alphabet mapping to recover the original message.`,
      history: `The Atbash cipher originated in ancient Israel and was used in biblical times. It was primarily used with the Hebrew alphabet but applies just as easily to the Latin alphabet. The name "Atbash" itself is derived from the first and last letters of the Hebrew alphabet (Aleph-Tav, Bet-Shin), symbolizing the substitution pattern.`,
      solving: `Because there is only one possible key (the reversed alphabet), the Atbash cipher offers no real cryptographic security. It can be easily solved by anyone familiar with the substitution pattern. Despite this, it remains popular in puzzles, historical texts, and steganography due to its simplicity and elegance.`
    },
  
    A1Z26: {
      title: 'A1Z26 Cipher',
      about: `The A1Z26 cipher is a basic substitution cipher where each letter of the alphabet is replaced by its corresponding number. A is 1, B is 2, C is 3, ..., and Z is 26.
      It’s a straightforward cipher that doesn't involve any shifting or key. While not secure for serious encryption, it’s commonly used in puzzles, educational settings, or as a way to introduce number-based encoding.`,
      encrypt: `1. Convert each letter in the plaintext to its alphabetical position (A = 1, B = 2, ..., Z = 26).
      2. Separate each number with a space, dash, or other delimiter for readability.
      3. Optionally, capitalize all letters before converting for consistency.`,
      decrypt: `1. Take the series of numbers and convert each back to its corresponding letter (1 = A, 2 = B, ..., 26 = Z).
      2. Join the resulting letters together to form the original plaintext.
      3. If delimiters are used (e.g., spaces, dashes), make sure to split the input accordingly before conversion.`,
      history: `The A1Z26 cipher doesn’t have a single point of origin but is based on the natural ordering of the alphabet. It's often found in simple coded messages, children's books, or beginner-level cryptography activities. Its numeric nature makes it useful for teaching letter-number correspondence.`,
      solving: `Since each letter maps directly to a number, solving the A1Z26 cipher is trivial. Anyone familiar with the alphabet’s numerical positions can decode the message manually or with a basic lookup table. For obfuscation, it can be combined with other ciphers, but alone, it is not considered cryptographically secure.`
    },   
  
    Playfair: {
      title: 'Playfair Cipher',
      about: `The Playfair cipher is a digraph substitution cipher, meaning it encrypts letters in pairs instead of one at a time. Invented by Charles Wheatstone in 1854 but popularized by Lord Playfair, it was the first practical digraph cipher and was widely used during wartime for its simplicity and improved security over monoalphabetic ciphers.
      It uses a 5x5 matrix of letters constructed from a keyword. The letters I and J are usually combined to fit the 25-letter grid.`,
      encrypt: `1. Create a 5x5 grid using a keyword, omitting repeated letters and merging I/J.
      2. Break the plaintext into letter pairs (digraphs). Insert an 'X' between identical letters in a pair and add a trailing 'X' if there's an odd number of letters.
      3. For each pair:
         - If both letters are in the same row: replace each with the letter to its right (wrap around to the start if needed).
         - If both are in the same column: replace each with the letter below it.
         - If the letters form a rectangle: replace each with the letter in the same row but in the other letter’s column.`,
      decrypt: `1. Use the same 5x5 grid from the keyword.
      2. Divide the ciphertext into digraphs.
      3. For each pair:
         - If both are in the same row: replace each with the letter to its left.
         - If both are in the same column: replace each with the letter above it.
         - If they form a rectangle: replace each with the letter in the same row but the other column.
      4. Remove any filler 'X' characters added during encryption, if appropriate.`,
      history: `The Playfair cipher was created by Charles Wheatstone but was promoted by Lord Playfair, giving it its name. It was used by British forces during the Second Boer War and World War I. It provided stronger security than monoalphabetic ciphers due to its digraph system, making frequency analysis more difficult.`,
      solving: `Breaking the Playfair cipher usually involves identifying digraph patterns and making educated guesses about common letter pairs. Frequency analysis of digraphs, known plaintext attacks, and pattern recognition are common techniques. While much stronger than simple substitution ciphers, it is still vulnerable to modern cryptanalysis tools and is not secure by today's standards.`
    },    
  
    Polybius: {
      title: 'Polybius Square Cipher',
      about: `The Polybius Square cipher is a classical substitution cipher that uses a 5x5 grid to encode each letter into a pair of numbers based on its row and column. Since the grid only has 25 spaces, the letters I and J are typically combined into one cell.
      This cipher turns letters into coordinate pairs, making it well-suited for telegraphy or signaling systems. It can also be used to convert messages into Morse code or numeric sequences.`,
      encrypt: `1. Construct a 5x5 grid of letters, typically combining I and J.
      2. For each letter in the plaintext:
         - Find its position in the grid.
         - Replace it with a two-digit number: the row number followed by the column number.
      3. For example, if E is in row 1, column 5, it becomes 15.`,
      decrypt: `1. Take the ciphertext in pairs of digits.
      2. Use the first digit as the row and the second as the column.
      3. Look up the letter in the grid using these coordinates.
      4. Convert each pair back to its corresponding letter.`,
      history: `The cipher is named after the ancient Greek historian Polybius, who invented the system as a way to transmit messages using torch signals or written numbers. The grid format enabled simple and flexible communication long before modern encryption existed.`,
      solving: `Since each letter is represented by a fixed pair of numbers, the Polybius Square is vulnerable to frequency analysis of digit pairs. If the cipher text uses a consistent grid and format, it can be easily broken by mapping the most common pairs to frequently used letters in the target language. To add security, the grid can be randomized using a keyword.`
    },    
  
    Autokey: {
      title: 'Autokey Cipher',
      about: `The Autokey cipher is a polyalphabetic substitution cipher that improves upon the Vigenère cipher by using the plaintext itself as part of the key. It starts with a short keyword, and then appends the plaintext to the end of the key to create a long, non-repeating key stream.
      This method reduces the repeating patterns found in the Vigenère cipher and makes frequency analysis more difficult. Like Vigenère, it uses a tabula recta (Vigenère square) for encryption and decryption.`,
      encrypt: `1. Choose a short keyword.
      2. Append the plaintext (without spaces or punctuation) to the end of the keyword to create the full key.
      3. Align the key with the plaintext.
      4. For each letter:
         - Convert both the plaintext and key letter to numbers (A = 0 to Z = 25).
         - Add the numbers, modulo 26.
         - Convert the result back to a letter to get the ciphertext.`,
      decrypt: `1. Start with the known keyword.
      2. Align it with the ciphertext.
      3. For each letter:
         - Convert the key and ciphertext letter to numbers.
         - Subtract the key number from the ciphertext number, modulo 26.
         - Convert the result back to a letter to recover the plaintext letter.
      4. Append each recovered plaintext letter to the key as you go to continue decryption.`,
      history: `The Autokey cipher was developed in the 16th century as an enhancement to the Vigenère cipher. Giovan Battista Bellaso and Blaise de Vigenère both contributed to its development. It was considered a major improvement due to its use of plaintext as a key extension, limiting repetition.`,
      solving: `While more secure than the Vigenère cipher, the Autokey cipher is still vulnerable to known-plaintext attacks and clever frequency analysis. If a portion of the plaintext or keyword is known, the rest of the message can often be recovered. Cryptanalysts look for patterns in how the key is regenerated during decryption.`
    },

  ROT13: {
    title: 'ROT13 Cipher',
    about: `ROT13 ("rotate by 13 places") is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. It's a special case of the Caesar cipher where the shift is 13. Applying ROT13 twice to a piece of text restores the original text; thus, the same algorithm can be used for encoding and decoding.
    It is often used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from the casual glance, but it is not intended as a method of serious encryption.`,
    encrypt: `1. For each letter in the plaintext, shift it 13 places forward in the alphabet.
    2. If the shift goes past 'Z', wrap around to the beginning of the alphabet.
    3. Non-alphabetic characters (numbers, symbols, spaces) are typically left unchanged.
    Example: 'HELLO' becomes 'URYYB'.`,
    decrypt: `1. For each letter in the ciphertext, shift it 13 places forward in the alphabet (which is the same as 13 places backward due to the 26-letter alphabet).
    2. If the shift goes past 'Z', wrap around.
    3. This will restore the original plaintext because applying ROT13 twice returns the original text.
    Example: 'URYYB' becomes 'HELLO'.`,
    history: `ROT13 originated in the net.jokes Usenet newsgroup in the early 1980s. It was used to obscure potentially offensive jokes, or to hide the answer to a riddle or a spoiler in a discussion. It is not a form of cryptography, as it offers no real security and is easily deciphered. Its use is primarily for mild obfuscation.`,
    solving: `ROT13 is not 'solved' in the traditional cryptographic sense because there is no key to discover. The transformation is fixed. If you suspect a piece of text is ROT13 encoded, you simply apply the ROT13 transformation to it again to decode it. Recognizing that a text might be ROT13 often comes from context (e.g., an online forum where it's commonly used) or by observing that it's gibberish but seems to have the structure of real words.`
  }
};
  