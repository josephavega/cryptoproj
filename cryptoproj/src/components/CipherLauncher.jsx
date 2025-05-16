import React, { useState } from 'react';
import { Window, WindowHeader, WindowContent, Tab, Tabs, TabBody, Button } from 'react95';
import styled from 'styled-components';

import CaesarCipher from './CaesarCipher';
import VigenereCipher from './VigenereCipher';
import AtbashCipher from './AtbashCipher';
import A1Z26Cipher from './A1Z26Cipher';
import PlayfairCipher from './PlayfairCipher';
import PolybiusSquareCipher from './PolybiusSquareCipher';
import AutokeyCipher from './AutokeyCipher';
import ROT13Cipher from './ROT13Cipher';

const WindowWrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 60vw;
  height: 65vh;
  max-width: 500px;
  max-height: 650px;
  z-index: 1000;
`;

const FixedWindow = styled(Window)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ciphers = [
  { name: 'Caesar', component: <CaesarCipher /> },
  { name: 'Vigenere', component: <VigenereCipher /> },
  { name: 'Atbash', component: <AtbashCipher /> },
  { name: 'A1Z26', component: <A1Z26Cipher /> },
  { name: 'Playfair', component: <PlayfairCipher /> },
  { name: 'Polybius Square', component: <PolybiusSquareCipher /> },
  { name: 'Autokey', component: <AutokeyCipher /> },
  { name: 'ROT13', component: <ROT13Cipher /> }
];

const CipherLauncher = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(ciphers[0].name);

  return (
    <WindowWrapper>
      <FixedWindow>
        <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Encryption - Decryption</span>
          <Button
            onClick={onClose}
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '2px 6px',
              backgroundColor: '#c0c0c0',
              border: '2px solid black',
            }}
          >
            ✕
          </Button>

        </WindowHeader>
        <WindowContent>
          <Tabs rows={2} value={activeTab} onChange={(value) => setActiveTab(value)}>
            {ciphers.map((cipher) => (
              <Tab key={cipher.name} value={cipher.name}>
                {cipher.name}
              </Tab>
            ))}
          </Tabs>
          <TabBody style={{ height: 350, overflow: 'auto' }}>
            {ciphers.map(
              (cipher) => activeTab === cipher.name && <div key={cipher.name}>{cipher.component}</div>
            )}
          </TabBody>
        </WindowContent>
      </FixedWindow>
    </WindowWrapper>
  );
};

export default CipherLauncher;
