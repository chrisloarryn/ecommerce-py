import * as React from 'react'
import { Col, Row } from 'react-bootstrap'

import Product from './../../components/Product'

import { ProductI } from '../../types/products'

import products from './../../products'

const HomeScreen: React.FC = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: ProductI) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
