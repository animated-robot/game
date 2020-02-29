import EntityAlive from './entity-alive'
import ModelHuman from '../models/model-human'

class EntityPlayer extends EntityAlive {
  constructor (name) {
    super(name, 26, 80, 0.1)
    this.color = 'yellow'
    this.isNameVisible = true
    this.setModel(new ModelHuman())
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
