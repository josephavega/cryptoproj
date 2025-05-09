import React, { useState } from 'react';
import { Button } from 'react95';

const VigenereCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('PYGMY');

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

  const encrypt = () => {
    const formattedKey = formatKey(plainText, key);
    const output = plainText
      .split('')
      .map((ch, i) => {
        if (/[a-z]/i.test(ch)) return shiftChar(ch, formattedKey[i], true);
        return ch;
      })
      .join('');
    setCipherText(output);
  };

  const decrypt = () => {
    const formattedKey = formatKey(cipherText, key);
    const output = cipherText
      .split('')
      .map((ch, i) => {
        if (/[a-z]/i.test(ch)) return shiftChar(ch, formattedKey[i], false);
        return ch;
      })
      .join('');
    setPlainText(output);
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

export default VigenereCipher;
