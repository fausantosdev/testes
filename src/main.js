import '../styles/global.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div class='container'>
    <h1>Testes</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
