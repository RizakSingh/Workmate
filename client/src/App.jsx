import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-screen flex items-center justify-center bg-black">
      <h1 className="text-4xl text-green-400 font-bold">
        WorkMate AI is Live 🚀
      </h1>
    </div>
    </>
  )
}

export default App
