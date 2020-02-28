import Graphics from './graphics'

class GameContainer {
  /** public */

  fps = null
  lastFps = null
  lastFrame = null
  recordedFps = null

  width = null
  height = null

  game = null
  input = null

  /** private */

  _graphics = null

  _paused = false
  _showFps = true

  constructor (game) {
    this.game = game
    this.lastFrame = Date.now()
  }

  /**
   * Initialize system contexts
   * @param {CanvasRenderingContext2D} ctx
   */
  init (canvas, ctx) {
    const { width, height } = canvas
    this.width = width
    this.height = height
    this._graphics = new Graphics(ctx, width, height)
    this.game.init(this)
  }

  /**
   * Suspend container updates
   */
  pause () {
    this._paused = true
  }

  /**
   * Continue updates
   */
  resume () {
    this._paused = false
  }

  /**
   * Check if the container is currently paused.
   * @return True if the container is paused
   */
  isPaused () {
    return this._paused
  }

  /**
   * Check if the display is in fullscreen mode
   * @return True if the display is in fullscreen mode
   */
  isFullscreen () {
    return false
  }

  /**
   * Get the current recorded frames per second
   */
  getFps () {
    return this.recordedFps
  }

  updateAndRender () {
    if (!this._paused) {
      this._updateFPS()
      const delta = this._getDelta()
      this.game.update(this, delta)
    }

    this._graphics.clear()
    this.game.render(this, this._graphics)
    window.requestAnimationFrame(() => this.updateAndRender())
  }

  _getDelta () {
    const time = Date.now()
    const delta = Math.floor(time - this.lastFrame)
    this.lastFrame = time

    return delta
  }

  _updateFPS () {
    if (Date.now() - this.lastFps > 1000) {
      this.lastFPS = Date.now()
      this.recordedFps = this.fps
      this.fps = 0
    }

    this.fps += 1
  }
}

export default GameContainer
