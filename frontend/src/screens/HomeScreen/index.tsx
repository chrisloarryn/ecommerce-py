import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Loader from './../../components/Loader'
import Message from './../../components/Message'
import Product from './../../components/Product'

import { listProducts } from '../../actions/productActions'

import { GlobalReducersProductType } from '../../types/reducersTypes'
import { ProductI } from '../../types/products'

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const { error, loading, products } = useSelector(
    (state: GlobalReducersProductType) => state.productList
  )
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product: ProductI) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  )
}

export default HomeScreen
