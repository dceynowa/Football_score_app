import React from "react"
import { Route } from "react-router-dom"

import StartPage from "../StartPage"
import Competitions from "../Competitons"
import Teams from "../Teams"

const Page = () => {
  return (
    <>
      <Route path="/" exact component={StartPage} />
      <Route path="/competitons" component={Competitions} />
      <Route path="/teams" component={Teams} />
    </>
  )
}

export default Page
