import React from "react"

import { NavLink } from "react-router-dom"

import "./style.css"

const navItems = [
  { id: 1, name: "Start", path: "/", exact: true },
  { id: 2, name: "Rozgywki", path: "/competitons", exact: false },
  { id: 3, name: "Drużyny", path: "/teams", exact: false }
]

const Navigation = () => {
  const menu = navItems.map(item => (
    <li key={item.id}>
      <NavLink to={item.path} exact={item.exact ? item.exact : null}>
        {item.name}
      </NavLink>
    </li>
  ))
  return (
    <nav className="main_nav">
      <ul>{menu}</ul>
    </nav>
  )
}

export default Navigation
