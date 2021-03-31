import * as React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <h2>Welcome</h2>
      <Footer />
    </div>
  )
}

export default App
