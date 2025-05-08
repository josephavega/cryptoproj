import React from 'react';
import CaesarCipher from './CaesarCipher';
import CipherLauncher from './CipherLauncher';

const CaesarCipherModule = () => {
  const content = [
    {
      title: 'About Caesar Cipher',
      component: (
        <p>
          The Caesar Cipher is a basic substitution cipher where each letter is shifted a fixed number of places in the alphabet.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <CaesarCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          Named after Julius Caesar, this cipher was used in Roman times to protect military messages.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Brute-force all 25 shifts</li>
          <li>Frequency analysis</li>
          <li>Look for common English words</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Caesar" windowsContent={content} />;
};

export default CaesarCipherModule;
