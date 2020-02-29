import EntityAlive from './entity-alive'

class EntityPlayer extends EntityAlive {
  constructor (name) {
    super(name, 26, 46, 0.1)
    this.color = 'hotpink'
  }

  update (container, delta) {
    if (Math.random() < 0.05) {
      const nx = 200 + (Math.random() - Math.random()) * 100
      const ny = 200 + (Math.random() - Math.random()) * 100
      this.moveTo(nx, ny)
    }

    super.update(container, delta)
  }
}

export default EntityPlayer
