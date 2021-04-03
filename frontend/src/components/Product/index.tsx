import * as React from 'react'

import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Rating from './../Rating'

import { ProductProps } from '../../types/products'

const Product: React.FC<ProductProps> = ({ product }) => (
  <Card className='my-3 p-3 rounded'>
    <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} />
    </Link>
    <Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as='div'>
        <div className='my-3'>
          <Rating
            color={'#f8e825'}
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
      </Card.Text>

      <Card.Text as='h3'>${product.price}</Card.Text>
    </Card.Body>
  </Card>
)

export default Product
