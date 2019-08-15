import React, { Component } from "react"

class Team extends Component {
  render() {
    console.log(`test ${this.props}`)
    return <h1 id={this.props.match.params.id}>Team</h1>
  }
}

export default Team
