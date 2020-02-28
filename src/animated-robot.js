import Game from './engine/game'

class AnimatedRobot extends Game {
  // @override
  init (container) {
  }

  // @override
  render (container, g) {
    g.drawRect(0, 0, 32, 32, 'hotpink')
    g.drawRect(32, 32, 32, 32, 'red')
    g.drawRect(64, 64, 32, 32, 'yellow')
  }

  // @override
  update (container, delta) {
  }
}

export default AnimatedRobot
