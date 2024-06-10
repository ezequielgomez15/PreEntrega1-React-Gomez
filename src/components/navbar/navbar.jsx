import React, { useEffect, useState } from 'react'
import './navbar.css'
import CartWidget from '../cartWidget/cartWidget'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { getAllCategories } from '../../servicios/productos'

import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
  getAllCategories()
    .then((res) => {
      setCategorias(res.data || []);
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}, []);

return (
  <>
    <nav>
      <Link to='/'>
        <img src="../public/React.svg.png" alt="" />
      </Link>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categorias.map((categoria) => {
                return (
                  <Dropdown.Item key={categoria.slug} as={Link} to={`/category/${categoria.slug}`}>
                    {categoria.name}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          
      <CartWidget />
    </nav>
  </>
);

}

export default Navbar
