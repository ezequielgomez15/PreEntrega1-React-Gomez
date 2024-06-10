import React from 'react'
import { UseProductsByID } from '../Hooks/UseProductsByID'
import ItemDetailContainer from '../components/ItemDetails/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Item = () => {
  const {id} = useParams()
  const {products} = UseProductsByID(id)
  return (
    <ItemDetailContainer products={products}/>

  )
}

export default Item
