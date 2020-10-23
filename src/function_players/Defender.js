import players from '../player_data/playerlist'

const Defender = () => {
  const para = document.createElement('p')
  const goal = players.filter((df) => df.position === 'Defender')
  const node = document.createTextNode(
    goal.map((xx) => `${xx.number}. ${xx.name}`).join(', ')
  )

  para.appendChild(node)
  const element = document.querySelector('.defender')
  element.appendChild(para)
}

export default Defender
