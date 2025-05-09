import React, { useState } from 'react';
import { Button } from 'react95';

const PlayfairCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('CRYPTO');

  const generateKeySquare = (key) => {
    key = key.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
    let seen = new Set();
    let square = [];

    for (let char of key) {
      if (!seen.has(char)) {
        seen.add(char);
        square.push(char);
      }
    }

    for (let i = 0; i < 26; i++) {
      let char = String.fromCharCode(65 + i);
      if (char === 'J') continue;
      if (!seen.has(char)) {
        seen.add(char);
        square.push(char);
      }
    }

    let matrix = [];
    for (let i = 0; i < 5; i++) {
      matrix.push(square.slice(i * 5, i * 5 + 5));
    }

    return matrix;
  };

  const encrypt = () => {
    const matrix = generateKeySquare(key);
    setCipherText(plainText.split('').map(char => char).join('')); // Placeholder logic
  };

  const decrypt = () => {
    const matrix = generateKeySquare(key);
    setPlainText(cipherText.split('').map(char => char).join('')); // Placeholder logic
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
