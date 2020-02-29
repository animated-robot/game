class NetworkManager {
  socket = null
  world = null

  constructor ({ socket, world }) {
    this.socket = socket
    this.world = world

    this.listen('input_context')
  }

  listen (type) {
    this.socket.on(type, (payload) => {
      const context = JSON.parse(payload)
      this.world.createOrUpdate(context)
    })
  }
}

export default NetworkManager
