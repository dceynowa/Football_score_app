import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Page from "./components/Page"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    )
  }
}

export default App
