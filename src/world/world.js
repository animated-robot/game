import EntityPlayer from '../entities/entity-player'

class World {
  entities = null

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
}

export default World
