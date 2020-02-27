import Entity from './entity'

class Player extends Entity {
  constructor (name) {
    super(name)

    this.hp.max = 10
    this.color = 'cyan'
    this.width = 20
    this.height = 48

    this.socket = {}
  }

  update ({ canvas, input }, delta) {
    this.move(Math.random() - Math.random(), Math.random() - Math.random())

    super.update({ canvas, input }, delta)
  }
}

export default Player
