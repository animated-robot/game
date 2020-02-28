import GameContainer from './game-container'

class AppGameContainer extends GameContainer {
  constructor (game) {
    super(game)

    this.canvas = this._getCanvas()
    this.context = this._getContext()
    this.setBackgroundColor()
  }

  /**
   * Setup the environment
   */
  setup () {
    this._onWindowResize()
    window.addEventListener('resize', () => this._onWindowResize())
  }

  /**
   * Start running the game
   */
  start () {
    this.setup()
    this.init(this.canvas, this.context)
    this.updateAndRender()
  }

  updateAndRender () {
    this.width = this.canvas.width
    this.height = this.canvas.height

    super.updateAndRender()
  }

  setBackgroundColor (color = 'black') {
    this.canvas.style.backgroundColor = color
    this.canvas.style.transform = 'translateZ(0)'
  }

  _getCanvas () {
    return document.getElementById('main-canvas')
  }

  _setupCanvas () {
    const pixelRatio = window.devicePixelRatio || 1
    const rect = this.canvas.getBoundingClientRect()
    this.canvas.width = rect.width * pixelRatio
    this.canvas.height = rect.height * pixelRatio
    this.context.scale(pixelRatio, pixelRatio)
  }

  _getContext () {
    return this.canvas.getContext('2d')
  }

  _onWindowResize () {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this._setupCanvas()
  }
}

export default AppGameContainer
