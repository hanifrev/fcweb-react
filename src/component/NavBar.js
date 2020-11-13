import React from 'react'
import { Link } from 'react-router-dom'
import onclick from '../stuff/preventClick'

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <ul>
          <li className="li">
            <a href={onclick}>News</a>
            {/* <Link to={onclick}>News</Link> */}
            <ul className="dropdown">
              <Link to={'//www.google.com'} target="_blank">
                Latest News
              </Link>
              <Link to={'//www.google.com'} target="_blank">
                News Archive
              </Link>
            </ul>
          </li>

          <li className="li">
            <a href={onclick}>Matches</a>
            <ul className="dropdown">
              <Link to={'https://google.com'}>Fixture</Link>
              <Link to={'https://google.com'}>Result</Link>
              <Link to={'https://google.com'}>League Table</Link>
            </ul>
          </li>

          <li className="li">
            <a href={onclick}>Teams</a>
            <ul className="dropdown">
              <Link to="/First_Team">First Team</Link>
              <Link to={'https://google.com'}>Under 23 Team</Link>
              <Link to={'https://google.com'}>U-18</Link>
            </ul>
          </li>

          <li className="li">
            <a href={onclick}>Tickets</a>
            <ul className="dropdown">
              <Link to={'https://google.com'}>Book Online</Link>
              <Link to={'https://google.com'}>Membership</Link>
              <Link to={'https://google.com'}>Terms and Conditions</Link>
            </ul>
          </li>

          <li className="li">
            <a href={onclick}>More</a>
            <ul className="dropdown">
              <Link to={'https://google.com'}>Community</Link>
              <Link to={'https://google.com'}>Fans Club</Link>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
