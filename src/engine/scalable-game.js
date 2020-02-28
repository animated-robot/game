class ScalableGame {
  _normalWidth = null
  _normalHeight = null

  /** @Game */
  _held = null

  _maintainAspect = false

  _targetWidth = null
  _targetHeight = null

  _container = null

  /**
   * Create a new scalable game wrapper
   *
   * @param {Game} held The game to be wrapper and displayed at a different resolution
   * @param {Number} normalWidth The normal width of the game
   * @param {Number} normalHeight The noral height of the game
   * @param {Boolean} maintainAspect True if we should maintain the aspect ratio
   */
  constructor (held, normalWidth, normalHeight, maintainAspect = false) {
    this._held = held
    this._normalWidth = normalWidth
    this._normalHeight = normalHeight
    this._maintainAspect = true
  }

  init (container) {
    this._container = container
    this.recalculateScale()
    this._held.init(container)
  }

  /**
   * Recalculate the scale of the game
   */
  recalculateScale () {
    this._targetWidth = this._container.width
    this._targetHeight = this._container.height

    const {
      _normalWidth: normalWidth,
      _normalHeight: normalHeight
    } = this

    if (this._maintainAspect) {
      const normalIsWide = normalWidth / normalHeight > 1.6
      const containerIsWide = this._targetWidth / this._targetHeight > 1.6
      const wScale = this._targetWidth / normalWidth
      const hScale = this._targetHeight / normalHeight

      if (normalIsWide & containerIsWide) {
        const scale = wScale < hScale ? wScale : hScale
        this._targetWidth = normalWidth * scale
        this._targetHeight = normalHeight * scale
      } else if (normalIsWide & !containerIsWide) {
        this._targetWidth = normalWidth * wScale
        this._targetHeight = normalHeight * wScale
      } else if (!normalIsWide & containerIsWide) {
        this._targetWidth = normalWidth * hScale
        this._targetHeight = normalHeight * hScale
      } else {
        const scale = wScale < hScale ? wScale : hScale
        this._targetWidth = normalWidth * scale
        this._targetHeight = normalHeight * scale
      }
    }
  }

  update (container, delta) {
    if (
      (this._targetHeight !== container.height) ||
      (this._targetWidth !== container.width)
    ) {
      this.recalculateScale()
    }

    this._held.update(container, delta)
  }

  render (container, g) {
    let xOffset = 0
    let yOffset = 0

    if (this._targetHeight < container.height) {
      yOffset = (container.height - this._targetHeight) / 2
    }

    if (this._targetWidth < container.width) {
      xOffset = (container.width - this._targetWidth) / 2
    }

    g.save()

    g.clip(xOffset, yOffset, this._targetWidth, this._targetHeight)
    g.translate(xOffset, yOffset)

    const xScale = this._targetWidth / this._normalWidth
    const yScale = this._targetHeight / this._normalHeight
    g.scale(xScale, yScale)

    this._held.render(container, g)

    g.restore()
  }
}

export default ScalableGame
