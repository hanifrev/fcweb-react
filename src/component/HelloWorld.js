import React from 'react'
import { Link } from 'react-router-dom'

//ME TESTING REACT ROUTER

const HelloWorld = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/First_Team">Test Router</Link>
        </li>
        <li>
          <Link to={'//www.google.com'} target="_blank">
            google
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HelloWorld
