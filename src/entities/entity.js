import CollisionBox from '../utils/collision-box'

class Entity {
  constructor (name) {
    this.id = null
    this.name = name || 'generic.entity'

    this.x = 0
    this.y = 0

    this.width = 24
    this.height = 24

    this.speed = 2.1
    this.color = 'hotpink'

    this.collision = new CollisionBox(0, 0, 0, 0)

    this.hp = { max: 0, current: 0 }
    this.atack = { speed: 0, damage: 0, projectile: null }

    this._move = null
  }

  render (g, canvas) {
    g.drawRect(this.getX(), this.getY(), this.width, this.height, this.color)
  }

  update ({ canvas, input }, delta) {
    if (this.isMoving()) {
      const dy = this._move.y - this.y
      const dx = this._move.x - this.x
      const angle = Math.atan2(dy, dx)
      this.x += Math.cos(angle) * this.speed * delta
      this.y -= Math.sin(angle) * this.speed * delta
    }
  }

  set health (value) {
    this.hp.current = value
    if (value > this.hp.max) {
      this.hp.current = this.hp.max
    }
  }

  get health () {
    return this.hp.current
  }

  get healthPercent () {
    return (this.hp.max / 100) * this.hp.current
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  spawn (x, y) {
    this.setPosition(x, y)
    this.health = this.hp.max
  }

  isDead () {
    return this.health <= 0
  }

  isAlive () {
    return !this.isDead()
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }

  takeDamage (damage) {
    this.hp.current -= damage
  }

  move (x, y) {
    this._move = Object.freeze({
      x: this.x + x,
      y: this.y + y
    })
  }

  isMoving () {
    if (!this._move) {
      return false
    }

    const dy = Math.abs(this._move.y - this.y)
    const dx = Math.abs(this._move.x - this.x)
    const distance = Math.tan(dy + dx)

    if (distance >= 0.05) {
      return true
    }

    this._move = null
    return false
  }
}

export default Entity
