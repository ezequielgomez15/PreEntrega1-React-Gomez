import React from 'react'
import './itemListContainer.css'

const ItemListContainer = ({greating}) => {
  return (
    <div className='itemList'>
      {greating}
    </div>
  )
}

export default ItemListContainer
