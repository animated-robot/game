import EntityAlive from './entity-alive'
import ModelHuman from '../models/model-human'

class EntityPlayer extends EntityAlive {
  constructor (name) {
    super(name, 26, 80, 0.1)
    this.color = 'yellow'
    this.isNameVisible = true
    this.setModel(new ModelHuman())
  }
}

export default EntityPlayer
