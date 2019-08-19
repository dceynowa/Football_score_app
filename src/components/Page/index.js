import React from "react";
import { Route, Switch } from "react-router-dom";

import StartPage from "../StartPage";
import Competitions from "../Competitions";
import Competition from "../Competition";
import Teams from "../Teams";
import Team from "../Team";
import LeagueTable from "../LeagueTable";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/competitions" exact component={Competitions} />
      <Route path="/competitions/:id" exact component={Competition} />
      <Route path="/competitions/:league_code/table" component={LeagueTable} />
      <Route path="/teams" exact component={Teams} />
      <Route path="/teams/:id" component={Team} />
    </Switch>
  );
};

export default Page;
