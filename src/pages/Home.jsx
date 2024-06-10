import React from 'react'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import { UseProducts } from '../Hooks/UseProducts'

const Home = () => {
    const {products} = UseProducts()
  return (
    <>
      <ItemListContainer products={products}/>
    </>
  )
}

export default Home
