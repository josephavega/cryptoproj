import React, { useState } from 'react';
import { Button } from 'react95';

const AtbashCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const processEncrypt = () => {
    const output = plainText.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';

      if (isUpper) return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
      if (isLower) return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
      return char;
    }).join('');
    setCipherText(output);
  };

  const processDecrypt = () => {
    const output = cipherText.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';

      if (isUpper) return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
      if (isLower) return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
      return char;
    }).join('');
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
        <Button onClick={processEncrypt}>Encrypt ↓</Button>
        <Button onClick={processDecrypt}>Decrypt ↑</Button>
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

export default AtbashCipher;
