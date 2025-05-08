import React from 'react';
import VigenereCipher from './VigenereCipher';
import CipherLauncher from './CipherLauncher';



const VigenereCipherModule = () => {
  const content = [
    {
      title: 'About Vigenère Cipher',
      component: (
        <p>
          The Vigenère Cipher is a polyalphabetic substitution cipher that uses a keyword to determine letter shifts, making it stronger than Caesar ciphers.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <VigenereCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          Although falsely attributed to Blaise de Vigenère, this cipher was first described by Giovan Battista Bellaso in the 16th century and became popular for centuries.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Kasiski Examination to determine key length</li>
          <li>Frequency analysis on repeated segments</li>
          <li>Known-plaintext attacks</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Vigenère" windowsContent={content} />;
};

export default VigenereCipherModule;
