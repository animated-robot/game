class Graphics {
  constructor (ctx, width, height) {
    this.screenWidth = width
    this.screenHeight = height
    this.ctx = ctx

    this.save = () => this.ctx.save()
    this.restore = () => this.ctx.restore()
    this.translate = (x, y) => this.ctx.translate(x, y)
    this.scale = (x, y) => this.ctx.scale(x, y)
  }

  clear () {
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
  }

  clip (x, y, width, height) {
    const region = new window.Path2D()
    region.rect(x, y, width, height)
    this.ctx.clip(region, 'nonzero')
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
