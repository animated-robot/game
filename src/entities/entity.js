import Position from '../engine/utils/position'

class Entity {
  name = null
  color = null

  x = null
  y = null

  width = null
  height = null

  isNameVisible = false

  _model = null

  constructor (name, width, height) {
    this.name = name
    this.width = width
    this.height = height
    this.color = 'white'
    this.x = 0
    this.y = 0
  }

  render (container, g) {
    if (this._model) {
      this._model.render(this.getX(), this.getY(), g)
    } else {
      g.drawRect(this.getX(), this.getY(), this.width, this.height, this.color)
    }

    if (this.isNameVisible) {
      g.drawText(this.name, this.getX(), this.getY() - 10)
    }
  }

  update (container, delta) {}

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  get position () {
    return new Position(this.x, this.y)
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }

  setModel (model) {
    this._model = model
  }
}

export default Entity
