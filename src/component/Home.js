import React from 'react'
// import { Route } from 'react-router-dom'
import Recent_Match from './Recent_Match'
import SomeColumn from './SomeColumn'
import Main_Photo from './Main_Photo'

const HomePage = () => {
  return (
    <div className="main">
      <Main_Photo />
      <Recent_Match />
      <SomeColumn />
    </div>
  )
}

export default HomePage
