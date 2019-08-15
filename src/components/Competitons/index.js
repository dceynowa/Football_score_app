import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { Thumbnail, Button } from "react-bootstrap"

import "./style.css"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

class Competitions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avaliableCompetitonsId: [
        2013,
        2016,
        2021,
        2018,
        2001,
        2015,
        2002,
        2019,
        2003,
        2017,
        2014,
        2000
      ],
      competitions: []
    }
  }

  componentDidMount() {
    fetch(`${BASIC_URL}/v2/competitions`, HEADER)
      .then(res => res.json())
      .then(res => this.setState({ competitions: res.competitions }))
      .catch(err => console.error(err))
  }

  showTeams = id => {
    alert(id)
  }

  render() {
    const { competitions, avaliableCompetitonsId } = this.state
    let filteredCompetitons = competitions.filter(competitonId =>
      avaliableCompetitonsId.includes(competitonId.id)
    )

    return (
      <Router>
        {filteredCompetitons.map(competition => (
          <div className="competiton__cell" key={competition.id}>
            <Thumbnail
              src={`/images/logos/${competition.code}.png`}
              alt="242x200"
              className="competitions_logo__img"
            >
              <h3>{competition.name}</h3>
              <Button
                variant="light"
                onClick={() => {
                  this.showTeams(competition.id)
                }}
              >
                Więcej
              </Button>
            </Thumbnail>
          </div>
        ))}
      </Router>
    )
  }
}

export default Competitions
