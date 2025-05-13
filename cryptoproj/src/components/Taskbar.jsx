import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Button, Window, WindowContent, Anchor } from 'react95';
import startIcon from '../assets/start.png';
import programmersIcon from '../assets/programmers.png';
import sourcesIcon from '../assets/sources.png';
import dontClickMeIcon from '../assets/dontclickme.png';
import helpIcon from '../assets/help.png';
import shutdownIcon from '../assets/shutdown.png';

const TaskbarWrapper = styled.div`
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 0;
  margin: 0;
`;

const Taskbar = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [isStartMenuOpen, setStartMenuOpen] = useState(false);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    const handleClickOutside = (event) => {
      if (isStartMenuOpen && startButtonRef.current && !startButtonRef.current.contains(event.target)) {
        let targetElement = event.target;
        let clickedOnMenu = false;
        while (targetElement) {
          if (targetElement.style && targetElement.style.position === 'absolute' && targetElement.style.zIndex === '1001') {
            clickedOnMenu = true;
            break;
          }
          targetElement = targetElement.parentElement;
        }
        if (!clickedOnMenu) {
          setStartMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStartMenuOpen]);

  const toggleStartMenu = () => setStartMenuOpen(!isStartMenuOpen);

  const handleMenuItemClick = (action) => {
    console.log('Menu item clicked: ' + action);
    if (action === 'Shut Down...') window.close();
    setStartMenuOpen(false);
  };

  const MenuItem = ({ icon, label, action }) => (
    <li style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src={icon} alt="" width={16} height={16} />
      <Anchor href="#" onClick={(e) => { e.preventDefault(); handleMenuItemClick(action); }}>{label}</Anchor>
    </li>
  );

  return (
    <TaskbarWrapper>
      <AppBar style={{ position: 'relative', width: '100%' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} ref={startButtonRef}>
            <Button onClick={toggleStartMenu} active={isStartMenuOpen} style={{ fontWeight: 'bold', marginRight: '4px' }}>
              <img src={startIcon} alt="start" width={16} height={16} style={{ marginRight: 4 }} />
              Start
            </Button>
            {isStartMenuOpen && (
              <Window
                shadow={false}
                style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 2px)',
                  left: 0,
                  zIndex: 1001,
                  width: '200px',
                  maxHeight: '400px',
                }}
              >
                <WindowContent style={{ padding: '2px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: '2px' }}>
                    <MenuItem icon={programmersIcon} label="Programmers" action="Programmers" />
                    <MenuItem icon={sourcesIcon} label="Sources" action="sources" />
                    <MenuItem icon={dontClickMeIcon} label="Don't Click Me!" action="Don't click me" />
                    <MenuItem icon={helpIcon} label="Help" action="Help" />
                    <div style={{ height: '1px', background: 'grey', margin: '4px 0' }} />
                    <MenuItem icon={shutdownIcon} label="Shut Down..." action="Shut Down..." />
                  </ul>
                </WindowContent>
              </Window>
            )}
            {children}
          </div>
          <span style={{ paddingRight: '8px' }}>
            🕒 {currentTime}
          </span>
        </Toolbar>
      </AppBar>
    </TaskbarWrapper>
  );
};

export default Taskbar;
