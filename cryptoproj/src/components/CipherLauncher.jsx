import React, { useState, useEffect } from 'react';
import { Button, Window, WindowHeader, WindowContent } from 'react95';
import styled from 'styled-components';

const WindowWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: ${(props) => props.z};
`;

const CipherLauncher = ({ cipherName, windowsContent }) => {
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateSize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const quadrantPositions = [
    { top: 230, left: 80 },
    { top: 80, left: screenSize.width / 2 - 60 },
    { top: screenSize.height / 2 + 50, left: 50 },
    { top: screenSize.height / 2 + 40, left: screenSize.width / 2 + 20 },
  ];

  const [windows, setWindows] = useState(
    windowsContent.map((w) => ({ ...w, open: false, z: 1 }))
  );

  const toggleWindows = () => {
    setOpen(!open);
    setWindows((prev) => prev.map((win) => ({ ...win, open: !open, z: 1 })));
  };

  const bringToFront = (index) => {
    const maxZ = Math.max(...windows.map((w) => w.z));
    setWindows((prev) =>
      prev.map((win, i) => (i === index ? { ...win, z: maxZ + 1 } : win))
    );
  };

  return (
    <>
      <Button onClick={toggleWindows}> {cipherName} Cipher </Button>
      {windows.map((win, index) =>
        win.open ? (
          <WindowWrapper
            key={index}
            top={quadrantPositions[index].top}
            left={quadrantPositions[index].left}
            z={win.z}
            onMouseDown={() => bringToFront(index)}
          >
            <Window style={{ width: 300 }}>
              <WindowHeader>
                <span>{win.title}</span>
              </WindowHeader>
              <WindowContent>{win.component}</WindowContent>
            </Window>
          </WindowWrapper>
        ) : null
      )}
    </>
  );
};

export default CipherLauncher;
