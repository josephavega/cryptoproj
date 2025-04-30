import React, { useState } from 'react';

const CaesarCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState(1);
  const [output, setOutput] = useState('');

  const shiftChar = (char, shift) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';

    if (isUpper) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
    }
    if (isLower) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97);
    }
    return char; // Non-alphabetic characters unchanged
  };

  const caesarCipher = (text, shift) => {
    return text
      .split('')
      .map(char => shiftChar(char, shift))
      .join('');
  };

  const handleEncrypt = () => {
    setOutput(caesarCipher(input, parseInt(key)));
  };

  const handleDecrypt = () => {
    setOutput(caesarCipher(input, -parseInt(key)));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Caesar Cipher</h2>
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
        type="number"
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

export default CaesarCipher;