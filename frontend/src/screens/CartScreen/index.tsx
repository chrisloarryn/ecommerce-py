import * as React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'

import Message from './../../components/Message'

import { addToCart, removeFromCart } from './../../actions/cartActions'

import { ProductI, TParams } from '../../types/globalTypes'
import { GlobalReducersProductType } from '../../types/reducersTypes'
import { CartItemI } from '../../types/cartTypes'

const CartScreen: React.FC<RouteComponentProps<TParams>> = ({
  history,
  match,
  location
}) => {
  const dispatch = useDispatch()
  const productId = match.params._id
  const search = location.search ? queryString.parse(location.search).qty : '1'
  const qtyNumber = Number(search)

  const { cartItems } = useSelector(
    (state: GlobalReducersProductType) => state.cart
  )
  console.log('cartItems', cartItems)

  React.useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qtyNumber))
    }
  }, [dispatch, productId, qtyNumber])

  const removeFromCartHandler = (_product: string) => {
    dispatch(removeFromCart(_product))
  }

  type LocalType = ProductI & CartItemI

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <Message variant='info'>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems?.map((item: CartItemI) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e: React.BaseSyntheticEvent) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[
                        ...Array(
                          (item as ProductI & CartItemI).countInStock
                        ).keys()
                      ].map((x: number) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems?.reduce(
                  (acc, item) => Number(acc) + Number(item.qty),
                  0
                )}
                ) items
              </h2>
              $
              {cartItems
                ?.reduce(
                  (acc, item) =>
                    Number(acc) + Number(item.price) * Number(item.qty),
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                style={{
                  cursor: `${
                    (cartItems as LocalType[]).length === 0
                      ? 'not-allowed'
                      : 'default'
                  }`
                }}
                disabled={cartItems?.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
