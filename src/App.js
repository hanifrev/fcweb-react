import React from 'react'
import './styles/styles.css'
import Header from './component/Header'
import Main_Photo from './component/Main_Photo'
import Footer from './component/Footer'
// import Recent_Match from './component/Recent_Match'
import SomeColumn from './component/SomeColumn'

const App = () => {
  return (
    <div className="main">
      <Header />
      <Main_Photo />
      {/* <Recent_Match /> */}
      <SomeColumn />
      <Footer />
    </div>
  )
}

export default App
