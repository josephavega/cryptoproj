import React, { useState } from 'react';

const PlayfairCipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('MONARCHY');
  const [result, setResult] = useState('');

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

  const findPosition = (matrix, char) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === char) {
          return [i, j];
        }
      }
    }
    return null;
  };

  const prepareMessage = (msg) => {
    msg = msg.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
    let result = '';
    for (let i = 0; i < msg.length; i++) {
      result += msg[i];
      if (i + 1 < msg.length) {
        if (msg[i] === msg[i + 1]) {
          result += 'X';
        }
      }
    }
    if (result.length % 2 !== 0) {
      result += 'X';
    }
    return result;
  };

  const encrypt = () => {
    const matrix = generateKeySquare(key);
    const prepared = prepareMessage(message);
    let output = '';

    for (let i = 0; i < prepared.length; i += 2) {
      const a = prepared[i];
      const b = prepared[i + 1];
      const [rowA, colA] = findPosition(matrix, a);
      const [rowB, colB] = findPosition(matrix, b);

      if (rowA === rowB) {
        output += matrix[rowA][(colA + 1) % 5];
        output += matrix[rowB][(colB + 1) % 5];
      } else if (colA === colB) {
        output += matrix[(rowA + 1) % 5][colA];
        output += matrix[(rowB + 1) % 5][colB];
      } else {
        output += matrix[rowA][colB];
        output += matrix[rowB][colA];
      }
    }

    setResult(output);
  };

  const decrypt = () => {
    const matrix = generateKeySquare(key);
    const prepared = prepareMessage(message);
    let output = '';

    for (let i = 0; i < prepared.length; i += 2) {
      const a = prepared[i];
      const b = prepared[i + 1];
      const [rowA, colA] = findPosition(matrix, a);
      const [rowB, colB] = findPosition(matrix, b);

      if (rowA === rowB) {
        output += matrix[rowA][(colA + 4) % 5];
        output += matrix[rowB][(colB + 4) % 5];
      } else if (colA === colB) {
        output += matrix[(rowA + 4) % 5][colA];
        output += matrix[(rowB + 4) % 5][colB];
      } else {
        output += matrix[rowA][colB];
        output += matrix[rowB][colA];
      }
    }

    setResult(output);
  };

  return (
    <div>
      <textarea
        rows={4}
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter key..."
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: '100%', marginTop: '8px' }}
      />
      <br />
      <button onClick={encrypt} style={{ marginTop: '8px' }}>Encrypt</button>
      <button onClick={decrypt} style={{ marginLeft: '10px', marginTop: '8px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default PlayfairCipher;
