import React, { Component } from "react"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: []
    }
  }

  componentDidMount() {
    fetch(`${BASIC_URL}/v2/teams/${this.props.match.params.id}`, HEADER)
      .then(res => res.json())
      .then(data => this.setState({ team: data.squad }))
  }

  render() {
    const players = this.state.team.map(player => {
      return (
        <li key={player.id}>
          <h4>name: {player.name}</h4>
          <h5>position: {player.position}</h5>
          <h5>nationality: {player.nationality}</h5>
        </li>
      )
    })
    console.log(this.state.team)
    return (
      <>
        <h3 style={{ width: "100%" }}>Squad:</h3>
        <ul>{players}</ul>
      </>
    )
  }
}

export default Team
