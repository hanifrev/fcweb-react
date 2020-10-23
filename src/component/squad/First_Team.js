import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-unresolved
import Goalkeeper from '../../function_players/Goalkeeper'
import Defender from '../../function_players/Defender'
import Midfielder from '../../function_players/Midfielder'
import Forward from '../../function_players/Forward'

const First_Team = () => {
  const [keeper, setKeeper] = useState(true)
  const [defend, setDefend] = useState(true)
  const [midfield, setMidfield] = useState(true)
  const [forward, setForward] = useState(true)
  // need to resolve more, learn about React route to create multiple pages in react app
  useEffect(() => {
    const gk = Goalkeeper
    const df = Defender
    const mf = Midfielder
    const fw = Forward
    setKeeper(gk)
    setDefend(df)
    setMidfield(mf)
    setForward(fw)
  }, [])
  return (
    <div className="main">
      <h2>First Team Squad</h2>

      <div className="goalkeeper">
        <h2>Goalkeeper</h2>
        {keeper ? <div>loading...</div> : <div>{setKeeper}</div>}
      </div>

      <div className="defender">
        <h2>Defender</h2>
        {defend ? <div>loading...</div> : <div>{setDefend}</div>}
      </div>

      <div className="midfielder">
        <h2>Midfielder</h2>
        {midfield ? <div>loading...</div> : <div>{setMidfield}</div>}
      </div>

      <div className="forward">
        <h2>Forward</h2>
        {forward ? <div>loading...</div> : <div>{setForward}</div>}
      </div>
    </div>
  )
}

export default First_Team
