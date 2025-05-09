import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from 'react95';

const TaskbarWrapper = styled.div`
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Taskbar = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <TaskbarWrapper>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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



