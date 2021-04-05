import * as React from 'react'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App: React.FC = () => (
  <div className='App'>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:_id' component={ProductScreen} />
          <Route path='/cart/:_id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  </div>
)

export default App
