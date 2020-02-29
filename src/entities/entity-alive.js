import EntityMovable from './entity-movable'

class EntityAlive extends EntityMovable {
  health = null

  constructor (name, width, height, speed) {
    super(name, width, height, speed)
    this.health = this.getMaxHealth()
  }

  isAlive () {
    return this.health > 0
  }

  isDead () {
    return !this.isAlive()
  }

  kill () {
    this.health = 0
  }

  /** Define entity max health */
  getMaxHealth () {
    return 10
  }
}

export default EntityAlive
