import { html } from 'lit-html'

const mainMenu = ({ sessionCode, startHandler }) => html`
  <style>
    .main-menu {
      height: 100%;
      background: linear-gradient(-45deg, #292E52, #212636);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }

    h1 {
      font-size: 72px;
      -webkit-text-stroke: 2px rgba(0, 0, 0, .5);
      background: -webkit-linear-gradient(#CD2359, #580361);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Saira Stencil One';
    }

    .session-code {
      font-size: 100px;
      font-weight: bolder;
      letter-spacing: 40px;
      margin-top: 10vh;
      margin-bottom: 5vh;
    }

    button {
      padding: 2vh 2vw;
      margin-top: 5vh;
      font-size: 24px;
      border: 0;
      border: 2px solid white;
      background: transparent;
      color: white;
      border-radius: 50px;
    }
  </style>

  <div class="main-menu">
    <h1>ANIMATED ROBOT</h1>

    <div class="session-code">${sessionCode}</div>
    <div>Join game using the code above</div>
    <button @click=${startHandler}>START GAME</button>
  </div>
`

export default mainMenu
