import React, { Component } from "react"

import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import Flag from "../Flag"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

import "./style.css"

class TopScorers extends Component {
  state = {
    scorers: []
  }

  componentDidMount() {
    const { league_code } = this.props
    fetch(
      `${BASIC_URL}/v2/competitions/${league_code}/scorers?limit=50`,
      HEADER
    )
      .then(res => res.json())
      .then(data => this.setState({ scorers: data.scorers }))
  }
  render() {
    let scorers = [...this.state.scorers]
    const tableBody = scorers.map((item, index) => (
      <tr key={item.player.id}>
        <td className="text-center">{index + 1}</td>
        <td>
          <div className="nationalFlag">
            <Flag nationality={item.player.nationality} />
            {item.player.name}
          </div>
        </td>
        <td>
          <Link to={`/teams/${item.team.id}`} className="topScorers_team_link">
            {item.team.name}
          </Link>
        </td>
        <td className="text-center">{item.numberOfGoals}</td>
      </tr>
    ))

    return (
      <>
        <Table striped hover responsive className="text-left">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>ZAWODNIK</th>
              <th>KLUB</th>
              <th className="text-center">GOLE</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      </>
    )
  }
}

export default TopScorers
