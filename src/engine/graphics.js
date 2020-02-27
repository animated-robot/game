class Graphics {
  constructor (ctx) {
    this.ctx = ctx
  }

  drawRect (x, y, width, height, color = 'white', rotation = 0) {
    this.ctx.save()
    this.ctx.fillStyle = color
    this.ctx.translate(x + (width / 2), y + (height / 2))
    this.ctx.rotate(rotation)
    this.ctx.fillRect(-(width / 2), -(height / 2), width, height)
    this.ctx.restore()
  }
}

export default Graphics
