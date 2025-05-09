import React, { useState } from 'react';
import { Button } from 'react95';

const AutokeyCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('MEOW');

  const formatText = (text) => text.toUpperCase().replace(/[^A-Z]/g, '');

  const encrypt = () => {
    const cleanMessage = formatText(plainText);
    const cleanKey = formatText(key);
    const fullKey = cleanKey + cleanMessage;
    let encrypted = '';

    for (let i = 0; i < cleanMessage.length; i++) {
      const m = cleanMessage.charCodeAt(i) - 65;
      const k = fullKey.charCodeAt(i) - 65;
      encrypted += String.fromCharCode(((m + k) % 26) + 65);
    }

    setCipherText(encrypted);
  };

  const decrypt = () => {
    const cleanMessage = formatText(cipherText);
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

    setPlainText(decrypted);
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

      {/* Keyword Input Below Ciphertext (Aligned Left) */}
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

export default AutokeyCipher;
