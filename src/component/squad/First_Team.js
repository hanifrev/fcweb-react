import React, { useState } from 'react'
import Goalkeeper from '../../function_players/Goalkeeper'

const First_Team = () => {
  const [state, setState] = useState()
  // need to resolve more, learn about React route to create multiple pages in react app
  return (
    <div className="main">
      <h2>First Team Squad</h2>
      <div className="goalkeeper">
        <h2>Goalkeeper</h2>
      </div>
      <div className="defender">
        <h2>Defender</h2>
      </div>
      <div className="midfielder">
        <h2>Midfielder</h2>
      </div>
      <div className="forward">
        <h2>Forward</h2>
      </div>
    </div>
  )
}

export default First_Team
