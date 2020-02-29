import EntityPlayer from './entity-player'

class EntityNetwork extends EntityPlayer {
  _direction = null

  update (container, delta) {
    if (this._direction) {
      const mx = this.getX() + 30 * (+this._direction.x)
      const my = this.getY() + 30 * (+this._direction.y)
      this.moveTo(mx, my)
    }

    super.update(container, delta)
  }

  handleContext ({ direction }) {
    this._direction = direction
  }
}

export default EntityNetwork
