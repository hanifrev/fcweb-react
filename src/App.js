import React from 'react'

import './styles/styles.css'
import HelloWorld from './component/HelloWorld'
import Header from './component/Header'
import Main_Photo from './component/Main_Photo'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className="main">
      <Header />
      <HelloWorld />
      <Main_Photo />
      <Footer />
    </div>
  )
}

export default App
