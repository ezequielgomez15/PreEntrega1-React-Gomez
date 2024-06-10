import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../servicios/productos'

export const UseProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllProducts().then((res) => setProducts(res.data.products)).catch((err) => console.log(err)).finally(() => {setLoading(false)})
    }, [])
  return (
    { products, loading }
  )
}
