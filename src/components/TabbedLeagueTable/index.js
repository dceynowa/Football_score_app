import React from "react"
import { Tab, Tabs } from "react-bootstrap"

import LeagueTable from "../LeagueTable"

import "./style.css"

const TabbedLeagueTable = props => {
  const { league_code } = props.match.params
  return (
    <Tabs
      defaultActiveKey={1}
      id="tabbed-league-table"
      className="tabs_league_table"
    >
      <Tab className="tab_league_table" eventKey={1} title="Ogółem">
        {<LeagueTable league_code={league_code} type="TOTAL" />}
      </Tab>

      <Tab className="tab_league_table" eventKey={2} title="U siebie">
        <LeagueTable league_code={league_code} type="HOME" />
      </Tab>

      <Tab className="tab_league_table" eventKey={3} title="Na wyjeździe">
        <LeagueTable league_code={league_code} type="AWAY" />
      </Tab>
    </Tabs>
  )
}

export default TabbedLeagueTable
