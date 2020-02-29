import EntityPlayer from '../entities/entity-player'
import EntityNetwork from '../entities/entity-network'

class World {
  entities = null
  _networkEntities = {}

  constructor () {
    this.entities = []
  }

  init (container) {
    const player = new EntityPlayer('Dummy')
    this.spawnEntity(player, 100, 100)
  }

  render (container, g) {
    this.entities.forEach(
      (entity) => entity.render(container, g)
    )
  }

  update (container, delta) {
    this.entities.forEach(
      (entity) => entity.update(container, delta)
    )
  }

  spawnEntity (entity, x, y) {
    entity.setPosition(x, y)
    this.entities.push(entity)
  }

  createOrUpdate ({ playerId, direction }) {
    let entity = this._networkEntities[playerId]

    if (!entity) {
      entity = new EntityNetwork(playerId)
      this._networkEntities[playerId] = entity
      this.spawnEntity(this._networkEntities[playerId], 250, 250)
    }

    entity.handleContext({ direction })
  }
}

export default World
