import { Engine } from 'liquid-node'
import getVariables from './getVariables'

window.addEventListener('load', () => {
  getVariables().then(variables => {
    const engine = new Engine()
    const liquidHtml = document.documentElement.innerHTML
    engine
      .parseAndRender(liquidHtml, variables)
      .then(html => {
        document.write(html)
        const rootElement = document.getElementById('liquid-renderer-root')
        const loadingElement = document.getElementById('liquid-renderer-loading')
        rootElement.style.display = 'block'
        loadingElement.style.display = 'none'
      })
  })
})
