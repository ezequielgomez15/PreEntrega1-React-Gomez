import React from 'react'
import { getProductByID } from '../servicios/productos'
import { useState, useEffect } from 'react'

export const UseProductsByID = (id) => {
    const [products, setProducts] = React.useState([])

    useEffect(() => {
        getProductByID(id).then((res) => setProducts(res.data)).catch((err) => console.log(err))
    }, [id])
  return (
    { products }
  )
}

