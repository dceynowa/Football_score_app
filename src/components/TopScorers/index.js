import React, { Component } from "react"

import { Table } from "react-bootstrap"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

class TopScorers extends Component {
  componentDidMount() {
    const { league_code } = this.props
    fetch(
      `${BASIC_URL}/v2/competitions/${league_code}/scorers?limit=50`,
      HEADER
    )
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <>
        <h4>Strzelcy</h4>
      </>
    )
  }
}

export default TopScorers
