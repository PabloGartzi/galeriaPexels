import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Galeria} from './components/Galeria.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Galeria />
    </>
  )
}

export default App
