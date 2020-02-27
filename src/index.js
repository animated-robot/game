import AnimatedRobot from './animated-robot'

function onWindowResize (canvas) {
  return () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

async function gameComponent () {
  const canvas = document.getElementById('main-canvas')
  const ctx = canvas.getContext('2d')

  // styles
  canvas.style.backgroundColor = 'black'
  canvas.style.transform = 'translateZ(0)'

  onWindowResize(canvas)()
  window.addEventListener('resize', onWindowResize(canvas))

  const game = new AnimatedRobot(canvas, ctx)
  game.init()
  game._gameLoop()

  return canvas
}

window.addEventListener('load', gameComponent, false)
