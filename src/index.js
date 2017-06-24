import React from 'react'
import ReactDOM from 'react-dom'
import LiquidRenderer from './LiquidRenderer'
import registerServiceWorker from './registerServiceWorker'

const element = document.getElementById('liquid-renderer-root')
const liquidHtml = element.innerHTML
element.style.display = 'block'

ReactDOM.render(<LiquidRenderer liquidHtml={liquidHtml} />, element)
registerServiceWorker()
