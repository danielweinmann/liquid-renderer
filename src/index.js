import querystring from 'querystring'
import React from 'react'
import ReactDOM from 'react-dom'
import LiquidRenderer from './LiquidRenderer'
import registerServiceWorker from './registerServiceWorker'

const { username } = querystring.parse(window.location.search.replace("?", ""))
const element = document.getElementById('liquid-renderer-root')
const liquidHtml = element.innerHTML
element.style.display = 'block'

ReactDOM.render(
  <LiquidRenderer
    username={username}
    liquidHtml={liquidHtml}
  />,
  element
)
registerServiceWorker()
