import { html } from 'lit-html'

const statusView = (message) => html`
  <style>
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  </style>

  <div class="container">
    <p>${message}</p>
  </div>
`

export default statusView
