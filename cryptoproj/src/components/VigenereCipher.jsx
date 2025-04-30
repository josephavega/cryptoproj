import React, { useState } from 'react';

const VigenereCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');

  const [output, setOutput] = useState('');

  const generateKey = (str, key) => {
      key = key.toUpperCase().split("");
      str = str.toUpperCase();
      if (str.length === key.length) {
          return key.join("");
      } else {
          let temp = key.length;    
          for (let i = 0; i < (str.length - temp); i++) {
              key.push(key[i % key.length]);
          }
      }
      return key.join("");
  };

  const vigenereEncryption = (str, key) => {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let cipher_text = "";
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) { // A-Z range
            let x = (charCode + key[keyIndex].charCodeAt(0)) % 26;
            x += 'A'.charCodeAt(0);
            cipher_text += String.fromCharCode(x);
            keyIndex++; // Only move key index for letters
        } else {
            cipher_text += str[i]; // Keep non-alphabet characters the same
        }
    }
    return cipher_text;
};

  const vigenereDecryption = (cipher_text, key) => {
      cipher_text = cipher_text.toUpperCase();
      key = key.toUpperCase();
      let orig_text = "";

      for (let i = 0; i < cipher_text.length; i++) {
          let x = (cipher_text[i].charCodeAt(0) -
                      key[i].charCodeAt(0) + 26) % 26;

          x += 'A'.charCodeAt(0);
          orig_text += String.fromCharCode(x);
      }
      return orig_text;
  };

  const handleEncrypt = () => {
    setOutput(vigenereEncryption(input.toUpperCase(), generateKey(input, key)));
  };

  const handleDecrypt = () => {
    setOutput(vigenereDecryption(input.toUpperCase(), generateKey(input, key)));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Vigenere Cipher</h2>
      <textarea
        placeholder="Enter your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={4}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <br />
      <label>Key: </label>
      <input
        value={key}
        onChange={e => setKey(e.target.value)}
        style={{ width: '60px', marginBottom: '0.5rem' }}
      />
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt} style={{ marginLeft: '1rem' }}>
        Decrypt
      </button>
      <h3>Result:</h3>
      <div style={{ whiteSpace: 'pre-wrap', padding: '0.5rem' }}>
        {output}
      </div>
    </div>
  );
};

export default VigenereCipher;
