import Graphics from './graphics'

class Game {
  constructor (canvas, ctx) {
    this.ctx = ctx
    this.canvas = canvas
    this.graphics = new Graphics(ctx)
  }

  /** public */

  init () {}
  render (g, canvas) {}
  update ({ canvas, input }, delta = 1) {}

  /** private */

  _gameLoop () {
    const { ctx, canvas, graphics } = this

    this.update({ canvas }, 1)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.render(graphics, canvas)

    window.requestAnimationFrame(() => this._gameLoop())
  }
}

export default Game
