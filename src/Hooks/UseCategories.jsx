import React, { useEffect, useState } from 'react'
import { getProductByCategories } from '../servicios/productos'

export const UseCategories = (category) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductByCategories(category).then((res) => setProducts(res.data.products)).catch((err) => console.log(err))
    }, [])
  return (
    { products }
  )
}