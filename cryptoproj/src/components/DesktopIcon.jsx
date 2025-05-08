import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 12px;
  color: white;
  font-family: 'ms_sans_serif';
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 6px;
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 1.2;
`;

const DesktopIcon = ({ icon, label, onClick }) => (
  <IconWrapper onClick={onClick}>
    <IconImage src={icon} alt={label} />
    <Label>{label}</Label>
  </IconWrapper>
);

export default DesktopIcon;
