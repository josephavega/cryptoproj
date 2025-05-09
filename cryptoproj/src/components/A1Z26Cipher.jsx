import React, { useState } from 'react';
import { Button } from 'react95';

const A1Z26Cipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const encrypt = () => {
    const output = plainText
      .toUpperCase()
      .replace(/[^A-Z ]/g, '')
      .split('')
      .map((c) => (c === ' ' ? ' ' : c.charCodeAt(0) - 64))
      .join(' ');
    setCipherText(output);
  };

  const decrypt = () => {
    const output = cipherText
      .split(' ')
      .map((val) => {
        if (val === '') return ' ';
        const num = parseInt(val);
        return isNaN(num) ? '' : String.fromCharCode(num + 64);
      })
      .join('');
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

export default A1Z26Cipher;

