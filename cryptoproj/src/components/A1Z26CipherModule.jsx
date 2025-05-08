import React from 'react';
import A1Z26Cipher from './A1Z26Cipher';
import CipherLauncher from './CipherLauncher';

const A1Z26CipherModule = () => {
  const content = [
    {
      title: 'About A1Z26 Cipher',
      component: (
        <p>
          The A1Z26 cipher is a simple direct substitution cipher where each letter of the alphabet is replaced by its position: A = 1, B = 2, ..., Z = 26.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <A1Z26Cipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          Though not historically used for secure communication, A1Z26 is often introduced in puzzles and educational contexts to teach numeric letter values.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Convert numbers to letters using A = 1 to Z = 26</li>
          <li>Watch for spacing to identify word boundaries</li>
          <li>Use context or known words to assist decoding</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="A1Z26" windowsContent={content} />;
};

export default A1Z26CipherModule;
