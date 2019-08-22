import React, { Component } from "react"

import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

import "./style.css"

class LeagueTable extends Component {
  state = {
    standings: []
  }

  componentDidMount() {
    const { league_code } = this.props
    fetch(`${BASIC_URL}/v2/competitions/${league_code}/standings`, HEADER)
      .then(res => res.json())
      .then(data => this.setState({ standings: data.standings }))
  }

  render() {
    const { type } = this.props

    let table = []
    let standings = [...this.state.standings]

    standings
      .filter(item => item.type === type)
      .map(item => (table = item.table))

    const tableBody = table.map(item => (
      <tr key={item.position} className="league_table_body_tr">
        <td className="league_table_body_td text-center">{item.position}</td>
        <td className="league_table_body_td">
          <Link
            to={`/teams/${item.team.id}`}
            className="leagueTable_team_link leagueTable_team_link"
          >
            <div className="league_table_team_log_div_img">
              <img
                className="league_table_team_log_img"
                src={item.team.crestUrl}
                alt="logo"
              />
            </div>
            {item.team.name}
          </Link>
        </td>
        <td className="league_table_body_td text-center">{item.points}</td>
        <td className="league_table_body_td text-center">{item.playedGames}</td>
        <td className="league_table_body_td text-center">{item.won}</td>
        <td className="league_table_body_td text-center">{item.draw}</td>
        <td className="league_table_body_td text-center">{item.lost}</td>
        <td className="league_table_body_td text-center">
          {item.goalsFor} - {item.goalsAgainst}
        </td>
      </tr>
    ))

    return (
      <>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>DRUŻYNA</th>
              <th className="text-center">PUNKTY</th>
              <th className="text-center">MECZE</th>
              <th className="text-center">ZWYCIESTWA</th>
              <th className="text-center">REMISY</th>
              <th className="text-center">PORAŻKI</th>
              <th className="text-center">BILANS</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      </>
    )
  }
}

export default LeagueTable
