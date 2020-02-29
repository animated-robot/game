import Game from './engine/game'
import World from './world/world'

class AnimatedRobot extends Game {
  world = null

  constructor () {
    super()

    this.world = new World()
  }

  // @override
  init (container) {
    this.world.init(container)
  }

  // @override
  render (container, g) {
    g.drawRect(0, 0, 32, 32, 'hotpink')
    g.drawRect(32, 32, 32, 32, 'red')
    g.drawRect(64, 64, 32, 32, 'yellow')

    this.world.render(container, g)
  }

  // @override
  update (container, delta) {
    this.world.update(container, delta)
  }
}

export default AnimatedRobot
