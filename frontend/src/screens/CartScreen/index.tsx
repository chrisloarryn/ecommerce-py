import * as React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'

import Message from './../../components/Message'

import { addToCart } from './../../actions/cartActions'

import { TParams } from '../../types/globalTypes'
import { GlobalReducersProductType } from '../../types/reducersTypes'

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
  return (
    <div>
      <h1>Cart Screen</h1>
    </div>
  )
}

export default CartScreen
