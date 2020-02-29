import Entity from './entity'
import Position from '../engine/utils/position'

class EntityMovable extends Entity {
  speed = null

  _moveTo = null

  constructor (name, width, height, speed = 1.0) {
    super(name, width, height)
    this.speed = speed
  }

  update (container, delta) {
    if (this.isMoving()) {
      if (this.getPosition().distance(this._moveTo) <= 1) {
        this._moveTo = null
      } else {
        const theta = this.getPosition().getTheta(this._moveTo)
        this.x += this.speed * Math.cos(theta) * delta
        this.y += this.speed * Math.sin(theta) * delta
      }
    }

    super.update(container, delta)
  }

  moveToPosition (position) {
    this._moveTo = position
  }

  moveTo (x, y) {
    console.log(x, y)
    this.moveToPosition(new Position(x, y))
  }

  isMoving () {
    return Boolean(this._moveTo)
  }
}

export default EntityMovable
