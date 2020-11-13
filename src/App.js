import React from 'react'
import './styles/styles.css'
import { Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import NavBar from './component/NavBar'
import HomePage from './component/Home'
import Footer from './component/Footer'

import First_Team from './component/squad/First_Team'

const App = () => {
  return (
    <Switch>
      <div className="body">
        <Header />
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/First_Team" component={First_Team} />
        <Footer />
      </div>
    </Switch>
  )
}

export default App
