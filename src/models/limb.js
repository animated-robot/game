class Limb {
  xOffset = null
  yOffset = null

  xCenter = null
  yCenter = null

  width = null
  height = null

  rotation = null

  color = null

  _limbs = null

  constructor (x, y, width, height, color) {
    this.xOffset = x
    this.yOffset = y
    this.width = width
    this.height = height
    this.color = color
    this.rotation = 0
    this.xCenter = width / 2
    this.yCenter = height / 2
    this._limbs = []
  }

  render (g) {
    g.translate(this.xOffset, this.yOffset)
    g.drawRect(-this.xCenter, -this.yCenter, this.width, this.height, this.color)

    this._limbs.forEach(
      (limbs) => limbs.render(g)
    )

    g.translate(-this.xOffset, -this.yOffset)
  }

  setCenter (x, y) {
    this.xCenter = x
    this.yCenter = y
  }

  addLimb (limb) {
    this._limbs.push(limb)
  }
}

export default Limb
