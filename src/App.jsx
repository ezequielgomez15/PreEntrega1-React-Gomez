import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import MainRoutes from './routes/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainRoutes/>
    </>
  )
}

export default App
