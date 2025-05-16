import React, { useState } from 'react';
import { Button } from 'react95';

const PlayfairCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('crypto');

  const generateKeySquare = (key) => {
    key = key.toLowerCase().replace(/[^a-z]/g, '').replace(/j/g, 'i');
    let seen = new Set();
    let square = [];

    for (let char of key) {
      if (!seen.has(char)) {
        seen.add(char);
        square.push(char);
      }
    }

    for (let i = 0; i < 26; i++) {
      let char = String.fromCharCode(97 + i);
      if (char === 'j') continue;
      if (!seen.has(char)) {
        seen.add(char);
        square.push(char);
      }
    }

    return Array.from({ length: 5 }, (_, i) => square.slice(i * 5, i * 5 + 5));
  };

const prepareText = (text) => {
  text = text.toLowerCase().replace(/[^a-z]/g, '').replace(/j/g, 'i');
  let prepared = '';
  
  for (let i = 0; i < text.length; i++) {
    let char1 = text[i];
    let char2 = text[i + 1];

    if (char1 === char2) {
      prepared += char1 + 'x';
    } else {
      prepared += char1;
      if (char2) {
        prepared += char2;
        i++; // Skip next character since it's already used
      }
    }
  }

  if (prepared.length % 2 !== 0) {
    prepared += 'z';
  }

  return prepared;
};


  const findPosition = (matrix, char) => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (matrix[row][col] === char) return [row, col];
      }
    }
    return null;
  };

  const encrypt = () => {
    const matrix = generateKeySquare(key);
    let text = prepareText(plainText);
    let result = '';

    for (let i = 0; i < text.length; i += 2) {
      let [rowA, colA] = findPosition(matrix, text[i]);
      let [rowB, colB] = findPosition(matrix, text[i + 1]);

      if (rowA === rowB) {
        result += matrix[rowA][(colA + 1) % 5] + matrix[rowB][(colB + 1) % 5];
      } else if (colA === colB) {
        result += matrix[(rowA + 1) % 5][colA] + matrix[(rowB + 1) % 5][colB];
      } else {
        result += matrix[rowA][colB] + matrix[rowB][colA];
      }
    }

    setCipherText(result);
  };

const decrypt = () => {
  const matrix = generateKeySquare(key);
  let text = cipherText;
  let result = '';

  for (let i = 0; i < text.length; i += 2) {
    let [rowA, colA] = findPosition(matrix, text[i]);
    let [rowB, colB] = findPosition(matrix, text[i + 1]);

    if (rowA === rowB) {
      result += matrix[rowA][(colA + 4) % 5] + matrix[rowB][(colB + 4) % 5];
    } else if (colA === colB) {
      result += matrix[(rowA + 4) % 5][colA] + matrix[(rowB + 4) % 5][colB];
    } else {
      result += matrix[rowA][colB] + matrix[rowB][colA];
    }
  }

  // Remove filler 'x' between duplicate letters (e.g., "mxm" -> "mm")
  let cleaned = '';
  for (let i = 0; i < result.length; i++) {
    if (
      i > 0 &&
      i < result.length - 1 &&
      result[i] === 'x' &&
      result[i - 1] === result[i + 1]
    ) {
      continue; // skip the 'x'
    }
    cleaned += result[i];
  }

  // Remove trailing 'z' if it was padding
  if (cleaned.endsWith('z')) {
    cleaned = cleaned.slice(0, -1);
  }

  setPlainText(cleaned);
};

  

  const clearPlainText = () => setPlainText('');
  const clearCipherText = () => setCipherText('');
  const clearKey = () => setKey('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      {/* Plaintext Input */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Plaintext..."
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          spellCheck={false}
          style={{ width: '100%' }}
        />
        <Button onClick={clearPlainText} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>

      {/* Encryption/Decryption Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Button onClick={encrypt}>Encrypt ↓</Button>
        <Button onClick={decrypt}>Decrypt ↑</Button>
      </div>

      {/* Ciphertext Output */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Ciphertext..."
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
          spellCheck={false}
          style={{ width: '100%' }}
        />
        <Button onClick={clearCipherText} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>

      {/* Keyword Input Below Ciphertext */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80%', gap: '10px', marginTop: '10px' }}>
        <label style={{ fontFamily: 'ms_sans_serif' }}>Keyword:</label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          style={{ width: '200px', textAlign: 'left', fontFamily: 'inherit', padding: '5px' }}
        />
        <Button onClick={clearKey} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>
    </div>
  );
};

export default PlayfairCipher;
