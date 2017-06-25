import React, { Component } from 'react'
import { Engine } from 'liquid-node'
import Loading from './Loading'

class LiquidRenderer extends Component {
  state = { html: null }

  async componentWillMount() {
    const { liquidHtml, getVariables } = this.props
    if (!liquidHtml) return
    const engine = new Engine()
    const variables = (getVariables ? await getVariables() : {})
    engine
      .parseAndRender(liquidHtml, variables)
      .then(html => this.setState(() => ({html})))
  }

  render() {
    const { html } = this.state
    if (!html) return (<Loading />)
    return(<div dangerouslySetInnerHTML={{__html: html}} />)
  }
}

export default LiquidRenderer
