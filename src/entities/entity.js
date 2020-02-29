import Position from '../engine/utils/position'

class Entity {
  name = null
  color = null

  x = null
  y = null

  width = null
  height = null

  constructor (name, width, height) {
    this.name = name
    this.width = width
    this.height = height
    this.color = 'white'
    this.x = 0
    this.y = 0
  }

  render (container, g) {
    g.drawRect(this.getX(), this.getY(), this.width, this.height, this.color)
  }

  update (container, delta) {}

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  getPosition () {
    return new Position(this.x, this.y)
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }
}

export default Entity
