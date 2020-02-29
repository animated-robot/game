import EntityAlive from './entity-alive'

class EntityPlayer extends EntityAlive {
  constructor (name) {
    super(name, 26, 46, 0.1)
    this.color = 'hotpink'
    this.isNameVisible = true
  }

  update (container, delta) {
    if (Math.random() < 0.05) {
      const nx = 400 + (Math.random() - Math.random()) * 200
      const ny = 400 + (Math.random() - Math.random()) * 200
      this.moveTo(nx, ny)
    }

    super.update(container, delta)
  }
}

export default EntityPlayer
