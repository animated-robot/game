import Game from './engine/game'
import World from './world/world'
import NetworkManager from './network-manager'

class AnimatedRobot extends Game {
  socket = null
  world = null

  _networkManager = null

  constructor (socket) {
    super()
    this.socket = socket

    this.world = new World()
  }

  // @override
  init (container) {
    this.world.init(container)
    this._networkManager = new NetworkManager(this)
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
