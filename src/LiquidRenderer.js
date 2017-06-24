import React, { Component } from 'react'
import { Engine } from 'liquid-node'
import Loading from './Loading'

class LiquidRenderer extends Component {
  state = { html: null }

  async getLiquidProperties() {
    const { username } = this.props
    if (!username) {
      return { name: "please pass a GitHub username in the query string, like '?username=your-username'" }
    }
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user = await response.json()
    return { name: user.name }
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
