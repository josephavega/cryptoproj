import React, { useState, useEffect } from 'react';
import {
    Window,
    WindowHeader,
    WindowContent,
    ScrollView,
    Button,
    Tabs,
    Tab,
    TabBody,
    Frame
} from 'react95';
import styled from 'styled-components';
import { cipherInfo } from '../data/cipherInfo';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

const WindowWrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  width: 70vw;
  height: 80vh;
  max-width: 700px;
  max-height: 700px;
  z-index: 1000;
`;

const FixedWindow = styled(Window)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTabs = styled(Tabs)`
  background: transparent;
  box-shadow: none;
`;

const Section = styled.div`
  margin-bottom: 1em;
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.3em;
`;

const SectionText = styled.div`
  white-space: pre-line;
`;


const InformationWindow = ({ cipherName, onClose }) => {
    const [activeTab, setActiveTab] = useState(cipherName || 'Caesar');

    useEffect(() => {
        if (cipherName) {
            setActiveTab(cipherName);
        }
    }, [cipherName]);

    const infoData = cipherInfo[activeTab] || {};

    return (
        <ThemeProvider theme={original}>
            <WindowWrapper>
                <FixedWindow>

                    <WindowHeader
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'rgb(0, 0, 128)',
                            color: 'white',
                            padding: '4px',
                            fontWeight: 'bold',
                        }}
                    >
                        <span>Information - {infoData.title || 'Cipher'}</span>
                        <Button
                            onClick={onClose}
                            style={{
                                fontWeight: 'bold',
                                fontSize: '16px',
                                padding: '2px 6px',
                                backgroundColor: '#c0c0c0',
                                border: '2px solid black',
                                marginLeft: 'auto',
                            }}
                        >
                            ✕
                        </Button>
                    </WindowHeader>

                    <WindowContent >
                        <StyledTabs rows={2} value={activeTab} onChange={(value) => setActiveTab(value)}>
                            {Object.keys(cipherInfo).map((cipher) => (
                                <Tab key={cipher} value={cipher}>
                                    {cipher}
                                </Tab>
                            ))}
                        </StyledTabs>
                        <TabBody style={{ flex: 1, overflow: 'hidden', height: '60vh'}}>
                        <ScrollView style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'white' }}>
                            
                                {['about', 'encrypt', 'decrypt', 'history', 'solving'].map((key) => (
                                    <Section key={key}>
                                        <SectionTitle>{key.charAt(0).toUpperCase() + key.slice(1)}</SectionTitle>
                                        <SectionText>{infoData[key]}</SectionText>
                                    </Section>
                                ))}
                            </ScrollView>
                        </TabBody>
                    </WindowContent>
                </FixedWindow>
            </WindowWrapper>
        </ThemeProvider>
    );
};

export default InformationWindow;


