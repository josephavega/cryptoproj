import React from 'react';
import PlayfairCipher from './PlayfairCipher';
import CipherLauncher from './CipherLauncher';

const PlayfairCipherModule = () => {
  const content = [
    {
      title: 'About Playfair Cipher',
      component: (
        <p>
          The Playfair Cipher is a digraph substitution cipher that encrypts pairs of letters using a 5x5 key square. It was invented in 1854 by Charles Wheatstone and was used by the British during World War I and II.
        </p>
      ),
    },
    {
      title: 'Encrypt / Decrypt',
      component: <PlayfairCipher />,
    },
    {
      title: 'History',
      component: (
        <p>
          The Playfair Cipher was the first practical digraph substitution cipher. It was used for tactical purposes by British forces in the Second Boer War and in World War I and II due to its simplicity and speed.
        </p>
      ),
    },
    {
      title: 'Solving Techniques',
      component: (
        <ul>
          <li>Analyze digraph frequencies.</li>
          <li>Look for common digraphs in the language.</li>
          <li>Use known plaintext attacks to reconstruct the key square.</li>
        </ul>
      ),
    },
  ];

  return <CipherLauncher cipherName="Playfair" windowsContent={content} />;
};

export default PlayfairCipherModule;
