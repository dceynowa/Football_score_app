import React from "react"

import GroupTableView from "../GroupTableView"

const GroupsStageTableView = props => {
  const { group, league_code } = props

  const tableView = group.map(item => {
    return (
      <GroupTableView
        key={item.group}
        group={item.group}
        table={item.table}
        league_code={league_code}
      />
    )
  })

  return <>{tableView}</>
}

export default GroupsStageTableView
