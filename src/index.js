function onWindowResize (canvas) {
  return () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

async function gameComponent () {
  const canvas = document.getElementById('main-canvas')
  canvas.style.backgroundColor = 'black'
  canvas.style.transform = 'translateZ(0)'

  onWindowResize(canvas)()
  window.addEventListener('resize', onWindowResize(canvas))

  // -- game init

  return canvas
}

window.addEventListener('load', gameComponent, false);
