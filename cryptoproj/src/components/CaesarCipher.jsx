import React, { useState } from 'react';

const CaesarCipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(3);
  const [result, setResult] = useState('');

  const shiftChar = (char, shift) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    if (!isUpper && !isLower) return char;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
  };

  const handleEncrypt = () => {
    const output = message.split('').map(ch => shiftChar(ch, parseInt(key))).join('');
    setResult(output);
  };

  const handleDecrypt = () => {
    const output = message.split('').map(ch => shiftChar(ch, -parseInt(key))).join('');
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
      <label>Key: </label>
      <input
        type="number"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: '60px' }}
      />
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt} style={{ marginLeft: '10px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default CaesarCipher;
