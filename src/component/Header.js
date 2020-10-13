import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li className="li">
            <a href={'https://google.com'}>News</a>
            <ul className="dropdown">
              <a href={'https://google.com'}>Latest News</a>
              <a href={'https://google.com'}>News Acrhive</a>
            </ul>
          </li>

          <li className="li">
            <a href={'https://google.com'}>Matches</a>
            <ul className="dropdown">
              <a href={'https://google.com'}>Fixture</a>
              <a href={'https://google.com'}>Result</a>
              <a href={'https://google.com'}>League Table</a>
            </ul>
          </li>

          <li className="li">
            <a href={'https://google.com'}>Teams</a>
            <ul className="dropdown">
              <a href={'https://google.com'}>First Team</a>
              <a href={'https://google.com'}>Under 23 Team</a>
              <a href={'https://google.com'}>U-18</a>
            </ul>
          </li>

          <li className="li">
            <a href={'https://google.com'}>Tickets</a>
            <ul className="dropdown">
              <a href={'https://google.com'}>Book Online</a>
              <a href={'https://google.com'}>Membership</a>
              <a href={'https://google.com'}>Terms and Conditions</a>
            </ul>
          </li>

          <li className="li">
            <a href={'https://google.com'}>More</a>
            <ul className="dropdown">
              <a href={'https://google.com'}>Community</a>
              <a href={'https://google.com'}>Fans Club</a>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
