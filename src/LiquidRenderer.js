import React, { Component } from 'react'
import { Engine } from 'liquid-node'
import Loading from './Loading'

class LiquidRenderer extends Component {
  state = { html: null }

  async getLiquidProperties() {
    await fetch("https://api.github.com/users")
    return { name: "Foo" }
  }

  async componentWillMount() {
    const { liquidHtml } = this.props
    const engine = new Engine()
    engine
      .parseAndRender(liquidHtml, await this.getLiquidProperties())
      .then(html => this.setState(() => ({html})))
  }

  render() {
    const { html } = this.state
    if (!html) {
      return (<Loading />)
    }
    return(<div dangerouslySetInnerHTML={{__html: html}} />)
  }
}

export default LiquidRenderer
