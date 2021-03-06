import React from "react"
import "../styles/global.css"
import Navbar from "../components/navbar"
import Projects from "../components/projects"

const Index = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Hi, I'm Jake</h1>
        <h2>Front-end web developer and all around nerd</h2>
      </div>
      <Projects />
    </div>
  )
}

export default Index
