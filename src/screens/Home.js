import React, { useState } from "react"
import "./Home.css"
import Skills from "../components/Skills"
import { Link } from "react-router-dom"
const Home = () => {
  const [showSkills, setShowSkills] = useState(false)

  const showSkill = () => {
    setShowSkills(!showSkills)
    console.log("click")
  }
  return (
    <div data-aos ='fade-up'className="home">
      <div className="home__image-container">
        <img src="../../images/bedet.jpg" alt="avatar" />
      </div>
      {showSkills && <Skills showSkill={showSkill} />}
      <div className="home__info">
        <h1>Bao Do</h1>
        <h6>Front End Developer</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ips
        </p>
        <div className="home__btn-container">
          <div className="btn">
            <Link to="/projects">
              <p className="animated-button">See My Projects</p>
            </Link>
          </div>
          <div className="btn" onClick={showSkill}>
            <p className="animated-button">See My Skills</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
