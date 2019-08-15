import React from "react"
import { Route, Switch } from "react-router-dom"

import StartPage from "../StartPage"
import Competitions from "../Competitons"
import Teams from "../Teams"
import Team from "../Team"

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/competitons" component={Competitions} />
      <Route path="/teams" exact component={Teams} />
      <Route path="/teams/:id" component={Team} />
    </Switch>
  )
}

export default Page
