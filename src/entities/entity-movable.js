import Entity from './entity'
import Position from '../engine/utils/position'

class EntityMovable extends Entity {
  speed = null
  _moveTo = null
  _numberOfTicks = null

  constructor (name, width, height, speed = 1.0) {
    super(name, width, height)
    this.speed = speed
    this._numberOfTicks = 0
  }

  // @override
  update (container, delta) {
    if (this.isMoving()) {
      if (this.position.distance(this._moveTo) <= 1) {
        this._moveTo = null
        this._numberOfTicks = 0
      } else {
        const theta = this.position.getTheta(this._moveTo)
        this.x += this.speed * Math.cos(theta) * delta
        this.y += this.speed * Math.sin(theta) * delta
        this._numberOfTicks += 1
      }
    }

    super.update(container, delta)
  }

  // @override
  getY () {
    return super.getY() + this._getSinusoidalValue()
  }

  _getSinusoidalValue () {
    return Math.abs(Math.sin(this._numberOfTicks * 0.125)) * 5
  }

  moveToPosition (position) {
    this._moveTo = position
  }

  moveTo (x, y) {
    this.moveToPosition(new Position(x, y))
  }

  isMoving () {
    return Boolean(this._moveTo)
  }
}

export default EntityMovable
