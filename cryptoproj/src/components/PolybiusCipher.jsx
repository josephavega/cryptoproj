import React, { useState } from 'react';

const PolybiusCipher = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

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
    const clean = sanitize(message);
    const output = clean.split('').map(char => charToCoord[char] || '').join(' ');
    setResult(output);
  };

  const decrypt = () => {
    const clean = message.replace(/[^0-9]/g, '');
    const pairs = clean.match(/.{1,2}/g) || [];
    const output = pairs.map(pair => coordToChar[pair] || '?').join('');
    setResult(output);
  };

  return (
    <div>
      <textarea
        rows={4}
        placeholder="Enter message or number pairs..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt} style={{ marginLeft: '10px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default PolybiusCipher;
