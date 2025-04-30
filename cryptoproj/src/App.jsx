import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaesarCipher from './components/CaesarCipher';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CaesarCipher />
      </div>
    </>
  )
}

export default App
