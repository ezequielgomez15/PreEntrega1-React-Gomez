import React from 'react'

const ItemDetailContainer = ({products}) => {
  return (
    <div>
        <img src={products.thumbnail} alt="" />
      <h1>{products.title}</h1>
      <p>{products.description}</p>
      <p>{products.price}</p>
    </div>
  )
}

export default ItemDetailContainer
