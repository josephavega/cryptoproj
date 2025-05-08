import React from 'react';
import AutokeyCipher from './AutokeyCipher';
import CipherLauncher from './CipherLauncher';

const AutokeyCipherModule = () => {
  const content = [
    {
      title: 'About Autokey Cipher',
      component: (
        <p>
          The Autokey Cipher is a polyalphabetic substitution cipher that uses a keyword followed by the plaintext itself to generate the encryption key stream.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <AutokeyCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          First described by Giovan Battista Bellaso and later improved by Blaise de Vigenère, the Autokey cipher aimed to reduce periodicity and improve security over simple repeating-key ciphers.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Recover initial key from ciphertext and known plaintext</li>
          <li>Use frequency analysis on short ciphertexts</li>
          <li>Guess common starting keywords</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Autokey" windowsContent={content} />;
};

export default AutokeyCipherModule;
