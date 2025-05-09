import React, { useState } from 'react';
import { Button } from 'react95';

const CaesarCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState(3);

  const shiftChar = (char, shift) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    if (!isUpper && !isLower) return char;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
  };

  const handleEncrypt = () => {
    setCipherText(plainText.split('').map(ch => shiftChar(ch, parseInt(key))).join(''));
  };

  const handleDecrypt = () => {
    setPlainText(cipherText.split('').map(ch => shiftChar(ch, -parseInt(key))).join(''));
  };

  const clearPlainText = () => setPlainText('');
  const clearCipherText = () => setCipherText('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      {/* Unencrypted Message Box */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Plaintext..."
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          spellCheck={false} // Disables red underline on misspelled words
          style={{ width: '100%' }}
        />
        <Button onClick={clearPlainText} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>

      {/* Buttons with Arrows */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Button onClick={handleEncrypt}>Encrypt ↓</Button>
        <Button onClick={handleDecrypt}>Decrypt ↑</Button>
      </div>

      {/* Encrypted Message Box */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Ciphertext..."
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
          spellCheck={false} // Disables red underline on misspelled words
          style={{ width: '100%' }}
        />
        <Button onClick={clearCipherText} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>

      {/* Key Input Below Ciphertext */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '80%' }}>
        <label style={{ fontFamily: 'ms_sans_serif', marginBottom: '5px' }}>Key:</label>
        <input
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          style={{ width: '80px', textAlign: 'center', fontFamily: 'inherit', padding: '5px' }}
        />
      </div>

    </div>
  );
};

export default CaesarCipher;

