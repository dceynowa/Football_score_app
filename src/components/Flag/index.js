import React from "react"

import { countriesData } from "../../data/countries"

import "flag-icon-css/css/flag-icon.min.css"
import "./style.css"

const Flag = props => {
  const { nationality } = props

  const nationalityCode = countriesData.countries
    .filter(item => item.name === nationality)
    .map(item => item.code.toLocaleLowerCase())

  return (
    <>
      <span className={`flag-icon flag-icon-${nationalityCode} countryFlag`} />
    </>
  )
}

export default Flag
