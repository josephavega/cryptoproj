import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Button, Window, WindowContent, Anchor, ProgressBar, WindowHeader } from 'react95';
import startIcon from '../assets/start.png';
import programmersIcon from '../assets/programmers.png';
import sourcesIcon from '../assets/sources.png';
import dontClickMeIcon from '../assets/dontclickme.png';
import helpIcon from '../assets/help.png';
import shutdownIcon from '../assets/shutdown.png';
import mrpIcon from '../assets/mrp.png';
import creator1Img from '../assets/joseph_avatar.png';
import creator2Img from '../assets/rile_avatar.png';

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

const ProgrammersModal = ({ onClose }) => (
  <div style={{ position: 'absolute', bottom: 120, left: 250, zIndex: 9999 }}> {/* Higher z-index */}
    <Window style={{ width: 400, height: 250 }}>
      <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Programmers</span>
        <Button onClick={onClose} style={{
          float: 'right',
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '2px 6px',
          backgroundColor: '#c0c0c0',
          border: '2px solid black',
        }}>✕</Button>
      </WindowHeader>
      <WindowContent>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <div>
            <img src={creator1Img} alt="Joseph Vega" style={{ width: 125, height: 125 }} />
            <p style={{ textAlign: 'center' }}>Joseph Vega</p>
          </div>
          <div>
            <img src={creator2Img} alt="Riley Nixon" style={{ width: 125, height: 125 }} />
            <p style={{ textAlign: 'center' }}>Riley Nixon</p>
          </div>
        </div>
      </WindowContent>
    </Window>
  </div>
);

const SourcesModal = ({ onClose }) => (
  <div style={{ position: 'fixed', top: '5%', right: '5%', zIndex: 9999 }}>
    <Window style={{ width: 400, height: 250 }}>
      <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Sources & Attributions</span>
        <Button onClick={onClose} style={{
          float: 'right',
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '2px 6px',
          backgroundColor: '#c0c0c0',
          border: '2px solid black',
        }}>✕</Button>
      </WindowHeader>
      <WindowContent>
        <div style={{ padding: '8px', lineHeight: '1.5' }}>
          <p><span style={{ fontWeight: 'bold' }}>Component Library:</span> <Anchor href="https://github.com/react95-io/React95" target="_blank">React95</Anchor></p>
          <p><span style={{ fontWeight: 'bold' }}>Avatars Created Using:</span> <Anchor href="https://www.avatarsinpixels.com/" target="_blank">Avatars in Pixels</Anchor></p>
          <p><span style={{ fontWeight: 'bold' }}>Further Reading:</span> <em>An Introduction to Mathematical Cryptography</em> by Jeffrey Hoffstein, Jill Pipher, & J.H. Silverman</p>
        </div>
      </WindowContent>
    </Window>
  </div>
);

const HelpModal = ({ onClose }) => (
  <div style={{ position: 'fixed', top: '20%', left: '30%', zIndex: 2000 }}>
    <Window style={{ width: 440 }}>
      <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Help</span>
        <Button onClick={onClose} style={{ float: 'right', fontWeight: 'bold', fontSize: '16px', padding: '2px 6px', backgroundColor: '#c0c0c0', border: '2px solid black' }}>✕</Button>
      </WindowHeader>
      <WindowContent>
        <div style={{ padding: '8px', lineHeight: '1.5' }}>
          <b style={{ fontWeight: 'bold'}}> Welcome to our oldschool cipher explainer! </b>
          <div style={{ height: 12 }} />
          <p>Check out the the desktop icons to explore classic ciphers and learn about how they work!</p>
          <div style={{ height: 12 }} />
          <p>Explore the Start button for some extra resources!<span style={{ display: 'inline-block', marginLeft: 32 }}>:3</span></p>
        </div>
      </WindowContent>
    </Window>
  </div>
);

const CenteredWindowWrapper = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: rgba(0,0,0,0.15);
`;

const Taskbar = ({ children }) => {
  const [isStartMenuOpen, setStartMenuOpen] = useState(false);
  const [showStealingWindow, setShowStealingWindow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgrammersModal, setShowProgrammersModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
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

  useEffect(() => {
    if (!showStealingWindow) {
      setProgress(0);
      return;
    }
    setProgress(0);
    const interval2 = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 120); // doubled interval for slower progress
    return () => clearInterval(interval2);
  }, [showStealingWindow]);

  const toggleStartMenu = () => setStartMenuOpen(!isStartMenuOpen);
  const [showSourcesModal, setShowSourcesModal] = useState(false);

  const handleMenuItemClick = (action) => {
    if (action === 'Programmers') {
      setShowProgrammersModal(true);
    } else if (action === 'Attribution') {
      setShowSourcesModal(true); 
    } else if (action === "Don't click me") {
      setShowStealingWindow(true);
    } else if (action === 'Help') {
      setShowHelpModal(true);
    } else if (action === 'Shut Down...') {
      window.close();
    }
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
      {showStealingWindow && (
        <CenteredWindowWrapper style={{ zIndex: 99999 }}>
          <Window style={{ width: 480, zIndex: 99999 }}>
            <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>bob_and_alice_cant_save_you_now_muahahah.exe</span>
              <Button size="sm" square onClick={() => setShowStealingWindow(false)} style={{ marginLeft: 4 }}>
                <span style={{ fontWeight: 'bold', fontSize: 16, lineHeight: 1 }}>×</span>
              </Button>
            </WindowHeader>
            <WindowContent>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2, padding: 0 }}>
                <img src={mrpIcon} alt="mr p." style={{ width: 72, height: 'auto', marginBottom: 2 }} />
                <div style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2, fontSize: 15 }}>
                  mr p. is stealing your data
                </div>
              </div>
              <div style={{ width: '99%', margin: '0 auto' }}>
                <ProgressBar value={progress} />
              </div>
            </WindowContent>
          </Window>
        </CenteredWindowWrapper>
      )}
      <AppBar style={{ position: 'relative', width: '100%' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} ref={startButtonRef}>
            <Button onClick={toggleStartMenu} active={isStartMenuOpen} style={{ fontWeight: 'bold', marginRight: '4px' }}>
              <img src={startIcon} alt="start" width={16} height={16} style={{ marginRight: 4 }} />
              Start
            </Button>
            {isStartMenuOpen && (
              <Window style={{ position: 'absolute', bottom: 'calc(100% + 2px)', left: 0, zIndex: 1001, width: '200px' }}>
                <WindowContent style={{ padding: '2px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: '2px' }}>
                    <MenuItem icon={programmersIcon} label="Programmers" action="Programmers" />
                    <MenuItem icon={sourcesIcon} label="Attribution" action="Attribution" />
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
        </Toolbar>
      </AppBar>
      {showSourcesModal && <SourcesModal onClose={() => setShowSourcesModal(false)} />}
      {showProgrammersModal && <ProgrammersModal onClose={() => setShowProgrammersModal(false)} />}
      {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}
    </TaskbarWrapper>
  );
};

export default Taskbar;
