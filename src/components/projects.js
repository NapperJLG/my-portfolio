import React from "react"
import ProjectCard from "./projectCard"

const Projects = () => {
  return (
    <div>
      <h2>Past Projects</h2>
      <ProjectCard
        name="Rhythm is a Maker"
        desc="Drum sequencer and keyboard"
      />
      <ProjectCard name="Acebook" desc="Facebook clone" />
      <ProjectCard
        name="M:tG Life Counter"
        desc="Life Counter for a game of Magic: The Gathering"
      />
    </div>
  )
}

export default Projects
