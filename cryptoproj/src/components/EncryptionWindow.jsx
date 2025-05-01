import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";

const EncryptionWindow = ({ title, children, onClose }) => (
  <Window style={{ width: 320, margin: "2rem", position: "absolute", top: 100, left: 100 }}>
    <WindowHeader>
      <span>{title}</span>
      <Button style={{ float: "right" }} onClick={onClose}>
        X
      </Button>
    </WindowHeader>
    <WindowContent>{children}</WindowContent>
  </Window>
);

export default EncryptionWindow;