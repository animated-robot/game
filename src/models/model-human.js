import Model from './model'
import Limb from './limb'

class ModelHuman extends Model {
  constructor () {
    super(26, 80)

    // Body
    const body = new Limb(0, 0, 16, 30, this.color)
    body.addLimb(new Limb(0, -27, 24, 24, 'hotpink'))
    body.addLimb(new Limb(0, 27, 12, 28, 'cyan'))
    body.addLimb(new Limb(0, 0, 12, 34, 'orange'))

    this.addLimb(body)
  }
}

export default ModelHuman
