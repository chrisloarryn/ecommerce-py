import * as React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

const Footer: React.FC = () => (
  <footer>
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; chrisloarryn</Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
