import React, { useState } from 'react';

const AutokeyCipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const formatText = (text) =>
    text.toUpperCase().replace(/[^A-Z]/g, '');

  const encrypt = () => {
    const cleanMessage = formatText(message);
    const cleanKey = formatText(key);
    const fullKey = cleanKey + cleanMessage;
    let encrypted = '';

    for (let i = 0; i < cleanMessage.length; i++) {
      const m = cleanMessage.charCodeAt(i) - 65;
      const k = fullKey.charCodeAt(i) - 65;
      encrypted += String.fromCharCode(((m + k) % 26) + 65);
    }

    setResult(encrypted);
  };

  const decrypt = () => {
    const cleanMessage = formatText(message);
    const cleanKey = formatText(key);
    let decrypted = '';
    let runningKey = cleanKey;

    for (let i = 0; i < cleanMessage.length; i++) {
      const c = cleanMessage.charCodeAt(i) - 65;
      const k = runningKey.charCodeAt(i) - 65;
      const p = (c - k + 26) % 26;
      const decryptedChar = String.fromCharCode(p + 65);
      decrypted += decryptedChar;
      runningKey += decryptedChar;
    }

    setResult(decrypted);
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
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt} style={{ marginLeft: '10px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default AutokeyCipher;
