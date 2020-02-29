class Position {
  x = null
  y = null

  constructor (x, y) {
    this.x = x
    this.y = y
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }

  set (x, y) {
    this.x = x
    this.y = y
  }

  add ({ x, y }) {
    this.x += x
    this.y += y
  }

  sub ({ x, y }) {
    this.x -= x
    this.y -= y
  }

  distance ({ x, y }) {
    return Math.sqrt(this.distanceSquared({ x, y }))
  }

  distanceSquared ({ x, y }) {
    const dx = x - this.x
    const dy = y - this.y
    return (dx * dx) + (dy * dy)
  }

  equals ({ x, y }) {
    return this.x === x && this.y === y
  }

  getTheta ({ x, y }) {
    const dx = x - this.x
    const dy = y - this.y
    return Math.atan2(dy, dx)
  }
}

export default Position
