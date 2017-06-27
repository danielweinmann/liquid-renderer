import { Engine } from 'liquid-node'
import getCurrentRoute from './getCurrentRoute'
import getLiquidHtml from './getLiquidHtml'
import getVariables from './getVariables'

window.addEventListener('load', () => {
  const route = getCurrentRoute()
  getLiquidHtml(route).then(liquidHtml => {
    getVariables(route).then(variables => {
      const engine = new Engine()
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
})
