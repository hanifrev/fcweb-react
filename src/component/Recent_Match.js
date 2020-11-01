// LEARN IT https://reactjs.org/docs/faq-ajax.html FIRST
// AND ALSO LEARN ABOUT COMPENENTDIDMOUNT AND USEEFECT
//////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'

const Recent_Match = () => {
  const [teams, setTeams] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609'
      )
      const data = await res.json()
      const [item] = data.results
      setTeams(item)
      setLoading(false)
    }
    fetchData()
  }, [])

  // useEffect(async () => {
  //   const response = await fetch(
  //     'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609'
  //   )
  //   const data = await response.json()
  //   const [item] = data.result
  //   setTeams(item)
  // }, [])

  return (
    <div className="recent-match">
      {/* <p>xxx</p> */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          Latest Result: {teams.strEvent}: {teams.intHomeScore} - {teams.intAwayScore}
        </div>
      )}
    </div>
  )
}
export default Recent_Match
