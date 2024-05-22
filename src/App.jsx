import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greating='Pre-entrega 1 de React'/>
    </>
  )
}

export default App
