import React from 'react'
import './navbar.css'
import CartWidget from '../cartWidget/cartWidget'
import ListGroup from 'react-bootstrap/ListGroup'

const Navbar = () => {
  return (
    <>
        <nav>
            <img src="../public/React.svg.png" alt="" />
            <ul>
              <li><a href="">Section 1</a></li>
              <li><a href="">Seccion 2</a></li>
              <li><a href="">Seccion 3</a></li>
            </ul>
            <CartWidget />
        </nav>
    </>
  )
}

export default Navbar
