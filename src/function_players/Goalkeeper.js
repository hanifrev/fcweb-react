import players from '../player_data/playerlist'

const Goalkeeper = () => {
  const para = document.createElement('p')
  const goal = players.filter((gk) => gk.position === 'Goalkeeper')
  const node = document.createTextNode(
    goal.map((xx) => `${xx.number}. ${xx.name}`).join(', ')
  )

  para.appendChild(node)
  const element = document.querySelector('.goalkeeper')
  element.appendChild(para)
}

export default Goalkeeper
