import React, { useState } from 'react';

const AtbashCipher = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const process = () => {
    const output = message.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';

      if (isUpper) return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
      if (isLower) return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
      return char;
    }).join('');
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
      <button onClick={process}>Encrypt / Decrypt</button>
      <p><b>Output:</b> {result}</p>
    </div>
  );
};

export default AtbashCipher;
