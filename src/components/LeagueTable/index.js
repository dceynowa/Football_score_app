import React, { Component } from "react"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

import ReagularSeasonTableView from "../../views/RegularSeasonTableView"
import GroupsStageTebleView from "../../views/GroupsStageTableView"

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
    const { type, league_code } = this.props

    let group = []
    let table = []
    let tableView
    let stage = ""
    let standings = [...this.state.standings]

    standings.filter(item => item.type === type).map(item => group.push(item))

    standings
      .filter(item => item.type === type)
      .map(item => (table = item.table))

    standings.map(item => (stage = item.stage))

    if (stage === "REGULAR_SEASON") {
      tableView = <ReagularSeasonTableView table={table} />
    } else if (stage === "GROUP_STAGE") {
      tableView = (
        <GroupsStageTebleView group={group} league_code={league_code} />
      )
    }

    return <>{tableView}</>
  }
}

export default LeagueTable
