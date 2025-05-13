import React from 'react';
import ROT13Cipher from './ROT13Cipher';
import CipherLauncher from './CipherLauncher';

const ROT13CipherModule = () => {
  const content = [
    {
      title: 'About ROT13 Cipher',
      component: <p>Details about ROT13 are in cipherInfo.js.</p>,
    },
    {
      title: 'Apply ROT13',
      component: <ROT13Cipher />,
    },
    {
      title: 'History',
      component: <p>Details about ROT13 history are in cipherInfo.js.</p>,
    },
    {
      title: 'Solving Techniques',
      component: <p>Details about ROT13 solving are in cipherInfo.js.</p>,
    },
  ];
  return <CipherLauncher cipherName="ROT13" windowsContent={content} />;
};

export default ROT13CipherModule;
