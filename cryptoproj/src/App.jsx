import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {styleReset, AppBar, Toolbar, Button, Window, WindowHeader, WindowContent} from "react95";
import original from "react95/dist/themes/original";
import CaesarCipher from "./components/CaesarCipher";
import CaesarExplanation from "./components/CaesarExplanation";
import VigenereCipher from "./components/VigenereCipher";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    font-family: 'ms_sans_serif';
    background: #008080;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
`;

const Desktop = styled.div`
  width: 100vw;
  height: 100vh;
  background: #008080;
  position: relative;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

const StyledWindow = styled(Window)`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: 320px;
`;

const windowPositions = {
  caesar: { top: 80, left: 80 },
  caesarE: { top: 400, left: 80 },
  vigenere: { top: 80, left: 440 },
  method3: { top: 300, left: 80 },
  method4: { top: 300, left: 440 },
  method5: { top: 520, left: 260 }
};

function App() {
  const [openWindows, setOpenWindows] = useState({
    caesar: false,
    caesarE: false,
    vigenere: false,
    method3: false,
    method4: false,
    method5: false
  });

  const [caesarData, setCaesarData] = useState({
    message: "",
    key: 1,
    result: "",
    mode: ""
  });

  const toggleWindow = (name) => {
    setOpenWindows((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Desktop>
        {openWindows.caesar && (
          <StyledWindow
            $top={windowPositions.caesar.top}
            $left={windowPositions.caesar.left}
          >
            <WindowHeader>
              Caesar Cipher
              <Button
                size="sm"
                onClick={() => {
                  toggleWindow("caesar");
                  setOpenWindows((prev) => ({ ...prev, caesarE: false }));
                  setCaesarData({ message: "", key: 1, result: "", mode: "" });
                }}
                style={{ float: "right" }}
              >
                X
              </Button>

            </WindowHeader>
            <WindowContent>
              <CaesarCipher
                caesarData={caesarData}
                setCaesarData={setCaesarData}
              />
            </WindowContent>
          </StyledWindow>
        )}
        {openWindows.caesarE && (
          <StyledWindow
            $top={windowPositions.caesarE.top}
            $left={windowPositions.caesarE.left}
          >
            <WindowHeader>Caesar Cipher Explanation</WindowHeader>
            <WindowContent>
              <CaesarExplanation caesarData={caesarData} />
            </WindowContent>
          </StyledWindow>
        )}
        {openWindows.vigenere && (
          <StyledWindow
            $top={windowPositions.vigenere.top}
            $left={windowPositions.vigenere.left}
          >
            <WindowHeader>
              Vigenère Cipher
              <Button
                size="sm"
                onClick={() => toggleWindow("vigenere")}
                style={{ float: "right" }}
              >
                X
              </Button>
            </WindowHeader>
            <WindowContent>
              <VigenereCipher />
            </WindowContent>
          </StyledWindow>
        )}
      </Desktop>
      <AppBar position="absolute" style={{ bottom: 0, height: 40 }}>
        <Toolbar style={{ padding: "1 8px", gap: "8px" }}>
          <Button
            size="sm"
            onClick={() => {
              toggleWindow("caesar");
              toggleWindow("caesarE");
            }}
          >
            Caesar
          </Button>
          <Button size="sm" onClick={() => toggleWindow("vigenere")}>
            Vigenère
          </Button>
          <Button size="sm" onClick={() => toggleWindow("method3")}>
            Method 3
          </Button>
          <Button size="sm" onClick={() => toggleWindow("method4")}>
            Method 4
          </Button>
          <Button size="sm" onClick={() => toggleWindow("method5")}>
            Method 5
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
