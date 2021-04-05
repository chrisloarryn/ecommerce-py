import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Link, RouteComponentProps } from 'react-router-dom'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'

import Loader from './../../components/Loader'
import Message from './../../components/Message'
import Rating from '../../components/Rating'

import { listProductDetails } from './../../actions/productActions'

import { GlobalReducersProductType } from '../../types/reducersTypes'
import { TParams } from '../../types/globalTypes'
import { ProductDetailI } from '../../types/productTypes'

const ProductScreen: React.FC<RouteComponentProps<TParams>> = ({
  history,
  match
}) => {
  const [qty, setQty] = React.useState(1)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(listProductDetails(match.params._id))
  }, [dispatch, match])

  let { error, loading, product } = useSelector(
    (state: GlobalReducersProductType) => state.productDetails
  )

  const addToCartHandler = () => {
    history.push(`/cart/${match.params._id}?qty=${qty}`)
  }

  return (
    <div>
      <Link to='/' className='btn btn-light my-3 rounded'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={(product as ProductDetailI).image} alt={(product as ProductDetailI).name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{(product as ProductDetailI).name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  color={'#f8e825'}
                  value={(product as ProductDetailI).rating as number}
                  text={`${(product as ProductDetailI).numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${(product as ProductDetailI).price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {(product as ProductDetailI).description}
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
                      <strong>${(product as ProductDetailI).price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {((product as ProductDetailI).countInStock as number) > 0
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {((product as ProductDetailI).countInStock as number) > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs='auto' className='my-1'>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e: React.BaseSyntheticEvent) =>
                            setQty(e.target.value)
                          }
                        >
                          {[...Array((product as ProductDetailI).countInStock).keys()].map(
                            (x: number) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    style={{
                      cursor: `${
                        (product as ProductDetailI).countInStock === 0 ? 'not-allowed' : 'default'
                      }`
                    }}
                    disabled={(product as ProductDetailI).countInStock === 0}
                    type='button'
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductScreen
