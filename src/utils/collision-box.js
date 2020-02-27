class CollisionBox {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  intersectsWith (collisionBox) {
    return false
  }
}

export default CollisionBox
