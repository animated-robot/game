class Model {
  width = null
  height = null
  color = null

  xCenter = null
  yCenter = null

  _limbs = null

  constructor (width, height) {
    this.width = width
    this.height = height
    this.xCenter = width / 2
    this.yCenter = height / 2
    this.color = 'white'
    this._limbs = []
  }

  render (x, y, g) {
    g.save()
    g.translate(x + this.xCenter, y + this.yCenter)

    this._limbs.forEach(
      (limb) => limb.render(g)
    )

    g.restore()
  }

  addLimb (limb) {
    this._limbs.push(limb)
  }
}

export default Model
