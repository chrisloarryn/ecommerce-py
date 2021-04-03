import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

import Product from './../../components/Product'

import { ProductI } from '../../types/products'

const HomeScreen: React.FC = () => {
  const [products, setProducts] = React.useState<ProductI[]>()
  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data }: { data: ProductI[] } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products && products.map((product: ProductI) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
