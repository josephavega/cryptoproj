import React from 'react';
import PolybiusCipher from './PolybiusSquareCipher';
import CipherLauncher from './CipherLauncher';

const PolybiusCipherModule = () => {
  const content = [
    {
      title: 'About Polybius Cipher',
      component: (
        <p>
          The Polybius Square Cipher is a classical cipher that replaces letters with coordinates in a 5x5 grid. I and J are typically combined into one cell.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <PolybiusCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          Invented by the Greek historian Polybius, the cipher was originally used to send messages via torch signals. It later became a foundation for other encryption systems.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Group digits into 2-digit pairs</li>
          <li>Map pairs back to coordinates</li>
          <li>Frequency analysis on coordinates</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Polybius" windowsContent={content} />;
};

export default PolybiusCipherModule;
