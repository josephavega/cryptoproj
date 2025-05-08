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
import { Window, WindowHeader, WindowContent, Button} from 'react95';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    font-family: 'ms_sans_serif';
    background: teal;
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
`;

function App() {
  const [showFolderWindow, setShowFolderWindow] = useState(false);

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div style={{ height: 'calc(100vh - 40px)' }}>
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

      <Taskbar>
        {/* Optional taskbar buttons */}
      </Taskbar>

      <div style={{ padding: '16px', position: 'absolute', top: 40, left: 0 }}>
        <DesktopIcon
          icon={folderIcon}
          label="Ciphers"
          onClick={() => setShowFolderWindow(true)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
