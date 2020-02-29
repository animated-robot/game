import { render } from 'lit-html'
import io from 'socket.io-client'
import AnimatedRobot from './animated-robot'
import AppGameContainer from './engine/app-game-container'
import ScalableGame from './engine/scalable-game'
import mainMenu from './views/main-menu'
import gameView from './views/game-view'
import statusView from './views/status-view'

const socket = io('http://191.252.184.102:8080/front')

function renderMainMenu () {
  const startHandler = () => {
    renderGame()
  }

  socket.once('session_created', (response) => {
    const { sessionCode } = JSON.parse(response)
    render(mainMenu({ sessionCode, startHandler }), document.body)
  })

  socket.emit('create_session', 'please, create session?')
}

function renderGame () {
  const start = () => {
    const game = new AnimatedRobot(socket)
    const scalableGame = new ScalableGame(game, 1280, 720)
    const app = new AppGameContainer(scalableGame)
    app.start()
  }

  render(gameView(), document.body)
  setTimeout(() => start(), 100)
}

socket.on('connect', () => {
  console.log('Connected?', socket.connected)
  renderMainMenu()
})

socket.on('connect_error', (e) => {
  render(statusView(`Connection ${e}`), document.body)
})

window.addEventListener('load', () => {
  render(statusView('Connecting...'), document.body)
})
