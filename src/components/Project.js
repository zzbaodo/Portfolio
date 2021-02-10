import React, {useEffect} from "react"
import "./Project.css"
import Aos from "aos"
import "aos/dist/aos.css"
const Project = ({ desc, roles, types, tech, date, image }) => {
 
  return (
    <div data-aos='fade-up' className="project-container">
      <img src={image} alt="project image" />
      <div className="project-desc-container">
        <p>{desc}</p>
        <div className="project-desc">
          {types && types.map((type) => <div key={type}>{type} </div>)}
        </div>
        <div className="project-roles">
          Roles:{" "}
          {roles &&
            roles.map((role) => (
              <span key={role} className="project-role">
                {role}
              </span>
            ))}
        </div>
        <div className="project-tech">
          <p>Techonologies Used:</p>
          <div className="tech-container">
            {tech && tech.map((el) => <div key={el}>{el}</div>)}
          </div>
        </div>
        <div className="project-date">
          <p style={{ color: "grey" }}>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
