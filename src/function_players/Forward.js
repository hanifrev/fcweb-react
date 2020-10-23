import players from '../player_data/playerlist'

const Forward = () => {
  const para = document.createElement('p')
  const goal = players.filter((fw) => fw.position === 'Forward')
  const node = document.createTextNode(
    goal.map((xx) => `${xx.number}. ${xx.name}`).join(', ')
  )

  para.appendChild(node)
  const element = document.querySelector('.forward')
  element.appendChild(para)
}

export default Forward
