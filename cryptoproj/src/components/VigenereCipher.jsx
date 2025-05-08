import React, { useState } from 'react';

const VigenereCipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const formatKey = (msg, k) => {
    k = k.toUpperCase().replace(/[^A-Z]/g, '');
    let keyRepeated = '';
    let j = 0;
    for (let i = 0; i < msg.length; i++) {
      const c = msg[i];
      if (/[a-z]/i.test(c)) {
        keyRepeated += k[j % k.length];
        j++;
      } else {
        keyRepeated += c;
      }
    }
    return keyRepeated;
  };

  const shiftChar = (char, keyChar, encrypt = true) => {
    const base = char === char.toUpperCase() ? 65 : 97;
    const keyShift = keyChar.toUpperCase().charCodeAt(0) - 65;
    const shift = encrypt ? keyShift : -keyShift;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
  };

  const process = (encrypt = true) => {
    const formattedKey = formatKey(message, key);
    const output = message
      .split('')
      .map((ch, i) => {
        if (/[a-z]/i.test(ch)) return shiftChar(ch, formattedKey[i], encrypt);
        return ch;
      })
      .join('');
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
      <label>Keyword: </label>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: '200px' }}
      />
      <br />
      <button onClick={() => process(true)}>Encrypt</button>
      <button onClick={() => process(false)} style={{ marginLeft: '10px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default VigenereCipher;

