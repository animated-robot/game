import EntityManager from '../entities/entity-manager'
import Player from '../entities/player'

class World {
  constructor (canvas, { tileSize, width, height }) {
    console.log(tileSize, width, height)
    this.width = width + 4
    this.height = height + 2
    this.tileSize = tileSize

    this.entityManager = new EntityManager()
  }

  init () {
    this.entityManager.spawn(new Player('Vornian'), 200, 200)
  }

  render (g, canvas) {
    for (let i = -1; i < this.width; i++) {
      for (let j = -1; j < this.height; j++) {
        g.drawRect(i * this.tileSize, j * this.tileSize, this.tileSize - 1, this.tileSize - 1, 'green')
      }
    }

    this.entityManager.render(g, canvas)
  }

  update ({ canvas, input }, delta) {
    this.entityManager.update({ canvas, input }, delta)
  }
}

export default World
