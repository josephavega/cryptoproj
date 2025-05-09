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
  top: 200px;
  left: 1000px;
  width: 600px;
  height: 600px;
  z-index: 1000;
`;

const FixedWindow = styled(Window)`
  width: 700px;
  height: 700px;
`;

const StyledTabs = styled(Tabs)`
  background: transparent;
  box-shadow: none;
  border: none;
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
                        <TabBody>
                            <ScrollView style={{ width: '610px', height: '475px', padding: '10px', backgroundColor: 'white' }}>

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


