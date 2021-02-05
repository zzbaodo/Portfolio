import React from "react"
import "./Projects.css"
import Project from "../components/Project"
const Projects = () => {
  return (
    <div className="projects__container">
      <h2>Works & Projects:</h2>
      <div className="wrapper">
        <Project
          image={`../../images/bedet.jpg`}
          desc={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
          types={["Web App", "Ecommerce"]}
          roles={["UI/UX", "Developer"]}
          tech={["ReactJS", "NodeJS", "ExpressJS"]}
          date="Sep 2020"
        />
        <Project
          image={`../../images/bedet.jpg`}
          desc={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
          types={["Web App", "Ecommerce"]}
          roles={["UI/UX", "Developer"]}
          tech={["ReactJS", "NodeJS", "ExpressJS"]}
          date="Sep 2020"
        />
      </div>
    </div>
  )
}

export default Projects
