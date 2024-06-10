import React from 'react'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'
import { UseCategories } from '../Hooks/UseCategories'

const Category = () => {
  const {id} = useParams()
  const {products} = UseCategories(id)
  return (
    <ItemListContainer products={products}/>
  )
}

export default Category
