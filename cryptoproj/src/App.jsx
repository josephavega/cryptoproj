import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import CaesarCipherModule from './components/CaesarCipherModule';
import VigenereCipherModule from './components/VigenereCipherModule';
import A1Z26CipherModule from './components/A1Z26CipherModule';
import AtbashCipherModule from './components/AtbashCipherModule';
import PlayfairCipherModule from './components/PlayfairCipherModule';
import AutokeyCipherModule from './components/AutokeyCipherModule';
import PolybiusCipherModule from './components/PolybiusCipherModule';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import folderIcon from './assets/folder.png';
import infoIcon from './assets/info.png';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import CipherLauncher from './components/CipherLauncher';
import InformationWindow from './components/InformationWindow';


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  html { /* Added html selector */
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; /* Ensure html also has overflow hidden */
  }
  body {
    font-family: 'ms_sans_serif';
    background: teal;
    margin: 0;
    padding: 0; /* Explicitly add padding: 0 */
    min-height: 100%; /* Use min-height as well or instead of height */
    height: 100vh; /* Keep this */
    overflow: hidden; /* Keep this */
    display: flex; /* Added to see if it affects layout */
    flex-direction: column; /* Added */
  }
  #root { /* Target the root div */
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  const [showFolderWindow, setShowFolderWindow] = useState(false);
  const [showCipherLauncher, setShowCipherLauncher] = useState(false);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeCipher, setActiveCipher] = useState('Caesar'); // Default cipher

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Taskbar>
      </Taskbar>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {showFolderWindow && (
          <div style={{ position: 'absolute', top: 70, left: 160, zIndex: 10 }}>
            <Window style={{ width: 250 }}>
              <WindowHeader>
                <span>Cipher Folder</span>
                <Button onClick={() => setShowFolderWindow(false)} style={{ float: 'right' }}>✕</Button>
              </WindowHeader>
              <WindowContent>
                <CaesarCipherModule />
                <VigenereCipherModule />
                <A1Z26CipherModule />
                <AtbashCipherModule />
                <PlayfairCipherModule />
                <AutokeyCipherModule />
                <PolybiusCipherModule />
              </WindowContent>
            </Window>
          </div>
        )}
      </div>

      <div style={{ padding: '16px', position: 'absolute', top: 40, left: 0 }}>
        <DesktopIcon
          icon={folderIcon}
          label="Ciphers"
          onClick={() => setShowCipherLauncher(true)}
        />

        {showCipherLauncher && (
          <div style={{ position: 'absolute', top: 70, left: 160, zIndex: 10 }}>
            <CipherLauncher cipherName="Ciphers" onClose={() => setShowCipherLauncher(false)} onCipherSelect={setActiveCipher} />
          </div>
        )}

        <DesktopIcon
          icon={infoIcon}
          label="Information"
          onClick={() => setShowInfoWindow(true)}
        />

        {showInfoWindow && (
          <div style={{ position: 'absolute', top: 120, left: 600, zIndex: 10 }}>
            <InformationWindow cipherName={showCipherLauncher ? activeCipher : 'Caesar'} onClose={() => setShowInfoWindow(false)} />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
