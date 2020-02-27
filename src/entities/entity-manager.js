class EntityManager {
  constructor () {
    this._count = 0
    this._list = []
  }

  render (g, canvas) {
    this._list.forEach((entity) => {
      entity.render(g, canvas)
    })
  }

  update ({ canvas, input }, delta) {
    this._list.forEach((entity) => {
      entity.update({ canvas, input }, delta)

      if (entity.isDead()) {
        this.despawn(entity)
      }
    })
  }

  spawn (entity, x, y) {
    entity.id = this._count + 1
    entity.spawn(x, y)
    this._list.push(entity)
  }

  despawn ({ id: entityId }) {
    const index = this._list.findIndex(({ id }) => id === entityId)
    delete this._list[index]
  }
}

export default EntityManager
