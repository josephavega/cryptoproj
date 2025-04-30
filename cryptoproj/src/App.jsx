import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaesarCipher from './components/CaesarCipher';
import VigenereCipher from './components/VigenereCipher';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CaesarCipher />
      </div>
      <div>
        <VigenereCipher />
      </div>
    </>
  )
}

export default App
