import React, { Component } from "react"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

import { Table } from "react-bootstrap"

class LeagueTable extends Component {
  state = {
    standings: []
  }

  componentDidMount() {
    const { league_code } = this.props.match.params
    fetch(`${BASIC_URL}/v2/competitions/${league_code}/standings`, HEADER)
      .then(res => res.json())
      .then(data => this.setState({ standings: data.standings }))
  }

  render() {
    let table = []
    let standings = [...this.state.standings]

    standings = standings
      .filter(item => item.type === "TOTAL")
      .map(item => (table = item.table))

    const tableBody = table.map(item => (
      <tr>
        <td>{item.position}</td>
        <td>{item.team.name}</td>
        <td>{item.playedGames}</td>
        <td>{item.won}</td>
        <td>{item.draw}</td>
        <td>{item.lost}</td>
        <td>
          {item.goalsFor} - {item.goalsAgainst}
        </td>
      </tr>
    ))

    return (
      <>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>DRUŻYNA</th>
              <th>MECZE</th>
              <th>ZWYCIESTWA</th>
              <th>REMISY</th>
              <th>PORAŻKI</th>
              <th>BILANS</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      </>
    )
  }
}

export default LeagueTable
