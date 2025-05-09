import React, { useState } from 'react';
import { Button } from 'react95';

const PolybiusSquareCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const grid = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
  ];

  const charToCoord = {};
  const coordToChar = {};

  grid.forEach((row, i) => {
    row.forEach((char, j) => {
      const coord = `${i + 1}${j + 1}`;
      charToCoord[char] = coord;
      coordToChar[coord] = char;
    });
  });

  const sanitize = (text) => text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');

  const encrypt = () => {
    const clean = sanitize(plainText);
    const output = clean.split('').map(char => charToCoord[char] || '').join(' ');
    setCipherText(output);
  };

  const decrypt = () => {
    const clean = cipherText.replace(/[^0-9]/g, '');
    const pairs = clean.match(/.{1,2}/g) || [];
    const output = pairs.map(pair => coordToChar[pair] || '?').join('');
    setPlainText(output);
  };

  const clearPlainText = () => setPlainText('');
  const clearCipherText = () => setCipherText('');

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
    </div>
  );
};

export default PolybiusSquareCipher;
