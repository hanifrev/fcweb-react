import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1 className="headtitle">
        <Link to="/">FC United of Transilvania</Link>
      </h1>
    </div>
  )
}

export default Header
