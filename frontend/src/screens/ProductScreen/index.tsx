import * as React from 'react'
import axios from 'axios'

import { Link, RouteComponentProps } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'

import Rating from '../../components/Rating'

import { ProductI } from '../../types/products'

type TParams = {
  _id: string
}

const ProductScreen: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [product, setProduct] = React.useState<ProductI>()
  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data }: { data: ProductI } = await axios.get(
        `/api/products/${match.params._id}`
      )
      setProduct(data as ProductI)
    }
    fetchProducts()
  }, [match.params._id])
  return (
    <div>
      {product && (
        <>
          <Link to='/' className='btn btn-light my-3 rounded'>
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    color={'#f8e825'}
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      style={{
                        cursor: `${
                          product.countInStock === 0 ? 'not-allowed' : 'default'
                        }`
                      }}
                      disabled={product.countInStock === 0}
                      type='button'
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default ProductScreen
