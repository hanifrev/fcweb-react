import React from 'react'
import './styles/styles.css'
import { Route } from 'react-router-dom'

import Header from './component/Header'
import NavBar from './component/NavBar'
import Main_Photo from './component/Main_Photo'
import Footer from './component/Footer'
import Recent_Match from './component/Recent_Match'
import SomeColumn from './component/SomeColumn'
import First_Team from './component/squad/First_Team'
import HelloWorld from './component/HelloWorld'

const App = () => {
  return (
    <div className="body">
      <Header />
      <NavBar />
      <HelloWorld />
      <Route exact path="/First_Team" component={First_Team} />
      <div className="main">
        <Route exact component={() => <Main_Photo />} />
        <Recent_Match />
        <SomeColumn />
      </div>
      <Footer />
    </div>
  )
}

export default App
