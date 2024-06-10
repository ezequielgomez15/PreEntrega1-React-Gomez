import React from 'react'
import './itemListContainer.css'
import { UseProducts } from '../../Hooks/UseProducts'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map((product) => {
        return (
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Link to={`/item/${product.id}`}>Ver Detalles</Link>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default ItemListContainer
