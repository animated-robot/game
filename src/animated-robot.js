import Game from './engine/game'
import World from './world/world'

class AnimatedRobot extends Game {
  constructor (canvas, ctx) {
    super(canvas, ctx)

    this.world = new World(canvas, 32)
  }

  init () {
    this.world.init()
  }

  render (g, canvas) {
    this.world.render(g, canvas)
  }

  update ({ canvas, input }, delta) {
    this.world.update({ game: this, canvas, input }, delta)
  }
}

export default AnimatedRobot
