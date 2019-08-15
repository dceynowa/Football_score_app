import React, { Component } from "react"
import { Thumbnail, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./style.css"

import { BASIC_URL } from "../../url/url"
import { HEADER } from "../../auth/index"

class Teams extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    fetch(`${BASIC_URL}/v2/competitions/PL/teams`, HEADER)
      .then(res => res.json())
      .then(res => this.setState({ teams: res.teams }))
      .catch(err => console.error(err))
  }

  showTeam(id) {
    alert(id)
  }

  render() {
    const { teams } = this.state

    return (
      <>
        {teams.map(team => (
          <div className="team__cell" key={team.id}>
            <Thumbnail
              src={team.crestUrl}
              alt="242x200"
              className="team_logo__img"
            >
              <h3>{team.name}</h3>
              <Link to={`/teams/${team.id}`}>
                <Button
                  variant="light"
                  // onClick={() => {
                  //   this.showTeam(team.id)
                  // }}
                >
                  Więcej
                </Button>
              </Link>
            </Thumbnail>
          </div>
        ))}
      </>
    )
  }
}

export default Teams
