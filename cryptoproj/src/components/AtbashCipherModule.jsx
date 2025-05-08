import React from 'react';
import AtbashCipher from './AtbashCipher';
import CipherLauncher from './CipherLauncher';

const AtbashCipherModule = () => {
  const content = [
    {
      title: 'About Atbash Cipher',
      component: (
        <p>
          The Atbash Cipher is a classical cipher that replaces each letter with its opposite in the alphabet: A ↔ Z, B ↔ Y, etc. It's a monoalphabetic substitution cipher.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <AtbashCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          Atbash originated in ancient Hebrew script and is one of the earliest known ciphers. It was used in biblical texts as a simple form of obfuscation.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Recognize that it's symmetric: encoding and decoding are the same</li>
          <li>Map each letter to its reverse pair (e.g., A→Z, B→Y)</li>
          <li>Use letter frequency or look for palindromes</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Atbash" windowsContent={content} />;
};

export default AtbashCipherModule;
