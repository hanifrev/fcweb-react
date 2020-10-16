// LEARN IT https://reactjs.org/docs/faq-ajax.html FIRST
// AND ALSO LEARN ABOUT COMPENENTDIDMOUNT AND USEEFECT
//////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react'

// const Recent_Match = () => {
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609')
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         let hasil = data.results
//         return hasil.map(function (hasil) {
//           const recentMatch = document.querySelector('.recent-match')
//           recentMatch.innerHTML = `Latest Result: ${hasil.strEvent}: ${hasil.intHomeScore} - ${hasil.intAwayScore}`
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   })

//   return (
//     <div>
//       <h4>test</h4>
//     </div>
//   )
// }

// export default Recent_Match
