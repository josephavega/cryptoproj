import React, { useState } from 'react';
import { Button } from 'react95';

const ROT13Cipher = () => {
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState('');

  const rot13 = (char) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    if (!isUpper && !isLower) return char;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  };

  const handleApplyROT13 = () => {
    setProcessedText(text.split('').map(ch => rot13(ch)).join(''));
  };

  const clearText = () => {
    setText('');
    setProcessedText('');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
 
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false} 
          style={{ width: '100%' }}
        />
        <Button onClick={clearText} style={{ marginLeft: '10px' }}>Clear</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Button onClick={handleApplyROT13}>Apply ROT13 ⇆</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <textarea
          rows={4}
          placeholder="Processed text..."
          value={processedText}
          readOnly
          spellCheck={false}
          style={{ width: '100%', backgroundColor: '#f0f0f0' }}
        />
      </div>
    </div>
  );
};

export default ROT13Cipher;
