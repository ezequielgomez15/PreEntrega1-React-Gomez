import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/category'
import Item from '../pages/Item'
import Navbar from '../components/navbar/navbar'

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/item/:id' element={<Item/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
