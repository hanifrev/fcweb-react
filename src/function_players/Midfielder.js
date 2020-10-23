import players from '../player_data/playerlist'

const Midfielder = () => {
  const para = document.createElement('p')
  const goal = players.filter((mf) => mf.position === 'Midfielder')
  const node = document.createTextNode(
    goal.map((xx) => `${xx.number}. ${xx.name}`).join(', ')
  )

  para.appendChild(node)
  const element = document.querySelector('.midfielder')
  element.appendChild(para)
}

export default Midfielder
