import React, { Component } from "react"

import { COUNTRY_API_URL } from "../../url/url"

import "./style.css"

class Flag extends Component {
  state = {
    countryNameWithFlags: []
  }
  componentDidMount() {
    fetch(`${COUNTRY_API_URL}?fields=name;flag;`)
      .then(res => res.json())
      .then(res => this.setState({ countryNameWithFlags: res }))
  }

  render() {
    const { nationality } = this.props

    const FlagSrc = this.state.countryNameWithFlags
      .filter(item => item.name === nationality)
      .map(item => {
        console.log(item.name)
        return item.flag
      })

    console.log(`nationality: ${nationality}`)
    console.log(`filter: ${FlagSrc.length}`)

    return (
      <>
        {FlagSrc.length === 1 ? (
          <img className="countryFlag_img" src={FlagSrc} alt="flag" />
        ) : null}
      </>
    )
  }
}

export default Flag
