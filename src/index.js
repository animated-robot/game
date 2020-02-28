import AnimatedRobot from './animated-robot'
import AppGameContainer from './engine/app-game-container'
import ScalableGame from './engine/scalable-game'

function main () {
  const game = new AnimatedRobot()
  const scalableGame = new ScalableGame(game, 1280, 720)
  const app = new AppGameContainer(scalableGame)
  app.start()
}

window.addEventListener('load', main, false)
