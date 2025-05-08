import React, { useState } from 'react';

const A1Z26Cipher = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const encrypt = () => {
    const res = message
      .toUpperCase()
      .replace(/[^A-Z ]/g, '')
      .split('')
      .map((c) => (c === ' ' ? ' ' : c.charCodeAt(0) - 64))
      .join(' ');
    setResult(res);
  };

  const decrypt = () => {
    const res = message
      .split(' ')
      .map((val) => {
        if (val === '') return ' ';
        const num = parseInt(val);
        return isNaN(num) ? '' : String.fromCharCode(num + 64);
      })
      .join('');
    setResult(res);
  };

  return (
    <div>
      <textarea
        rows={4}
        placeholder="Enter message or numbers..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt} style={{ marginLeft: '10px' }}>Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default A1Z26Cipher;
