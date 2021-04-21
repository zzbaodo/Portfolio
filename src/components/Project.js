import React, { useState } from "react"
import "./Project.css"
import VPlayer from "./VPlayer"
const Project = ({ desc, roles, types, tech, date, image, video, src }) => {
  const [showVideo, setShowVideo] = useState(false)
  const onClickHandler = () => {
    setShowVideo(!showVideo)
  }
  return (
    <>
      <div data-aos="fade-up" className="project-container">
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={`project ${desc}`} className="project-logo" />
        </a>
        <div className="project-desc-container">
          <p>{desc}</p>
          <div className="project-desc">
            {types && types.map((type) => <div key={type}>{type} </div>)}
          </div>
          <div className="project-roles">
            <span style={{ fontWeight: "800" }}>Roles</span>:{" "}
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
          <a
            href={src}
            target="_blank"
            className="site-link"
            rel="noopener noreferrer"
          >
            Check out the site!
          </a>
          <div className="live-demo" onClick={onClickHandler}>
            {" "}
            <i className="fas fa-play-circle"></i> Live Demo
          </div>
        </div>
      </div>
      {showVideo && <VPlayer src={video} close={onClickHandler} />}
    </>
  )
}

export default Project
