import { useState } from 'react'
import './App.css'
import DashBoard from './Pages/DashBoard/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashBoard />
    </>
  )
}

export default App
