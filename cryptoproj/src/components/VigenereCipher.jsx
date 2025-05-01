import React, { useState } from "react";
import { TextInput, Button, Fieldset } from "react95";

const VigenereCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');

  const generateKey = (str, key) => {
    key = key.toUpperCase().split("");
    str = str.toUpperCase();
    if (str.length === key.length) return key.join("");

    let temp = key.length;
    for (let i = 0; i < (str.length - temp); i++) {
      key.push(key[i % key.length]);
    }
    return key.join("");
  };

  const vigenereEncryption = (str, key) => {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let cipher_text = "";
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        let x = (charCode + key[keyIndex].charCodeAt(0)) % 26;
        x += 'A'.charCodeAt(0);
        cipher_text += String.fromCharCode(x);
        keyIndex++;
      } else {
        cipher_text += str[i];
      }
    }
    return cipher_text;
  };

  const vigenereDecryption = (cipher_text, key) => {
    cipher_text = cipher_text.toUpperCase();
    key = key.toUpperCase();
    let orig_text = "";

    for (let i = 0; i < cipher_text.length; i++) {
      let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
      x += 'A'.charCodeAt(0);
      orig_text += String.fromCharCode(x);
    }
    return orig_text;
  };

  const handleEncrypt = () => {
    const genKey = generateKey(input, key);
    setOutput(vigenereEncryption(input, genKey));
  };

  const handleDecrypt = () => {
    const genKey = generateKey(input, key);
    setOutput(vigenereDecryption(input, genKey));
  };

  return (
    <Fieldset label="Vigenère Cipher">
      <TextInput
        placeholder="Enter your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        multiline
      />
      <TextInput
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ marginTop: "0.5rem" }}
      />
      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
        <Button onClick={handleEncrypt}>Encrypt</Button>
        <Button onClick={handleDecrypt}>Decrypt</Button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>Result: {output}</div>
    </Fieldset>
  );
};

export default VigenereCipher;
