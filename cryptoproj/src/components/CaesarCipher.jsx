import React from "react";
import { TextInput, Button, Fieldset } from "react95";

const CaesarCipher = ({ caesarData, setCaesarData }) => {
  const { message, key, result } = caesarData;

  const shiftChar = (char, k) => {
    if (!/[a-z]/i.test(char)) return char;
    const base = char === char.toUpperCase() ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + k + 26) % 26) + base
    );
  };

  const encrypt = () => {
    const res = message
      .split("")
      .map((ch) => shiftChar(ch, parseInt(key)))
      .join("");
    setCaesarData({ message, key, result: res, mode: "encrypt" });
  };

  const decrypt = () => {
    const res = message
      .split("")
      .map((ch) => shiftChar(ch, -parseInt(key)))
      .join("");
    setCaesarData({ message, key, result: res, mode: "decrypt" });
  };

  return (
    <Fieldset label="Caesar Cipher">
      <TextInput
        placeholder="Enter your message..."
        value={message}
        onChange={(e) =>
          setCaesarData({ ...caesarData, message: e.target.value })
        }
        fullWidth
        multiline
      />
      <TextInput
        placeholder="Key"
        value={key}
        onChange={(e) =>
          setCaesarData({ ...caesarData, key: e.target.value })
        }
        style={{ marginTop: "0.5rem" }}
      />
      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
        <Button onClick={encrypt}>Encrypt</Button>
        <Button onClick={decrypt}>Decrypt</Button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>Result: {result}</div>
    </Fieldset>
  );
};

export default CaesarCipher;
