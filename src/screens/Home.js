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
    <>
      {showSkills && <Skills showSkill={showSkill} />}
      <div className="home">
        <div data-aos="fade-up" className="home__image-container">
          <img src="../../images/coder.JPG" alt="avatar" />
        </div>

        <div data-aos="fade-up" className="home__info">
          <h1>Bao Do</h1>
          <h6>Front-End Developer</h6>
          <h6>Back-End Developer</h6>
          <p>
            Hello there, I am a passionate fullstack developer using
            cutting-edge web technologies to build amazing products and focusing
            on solving problems for different niches and different industries
            using the power of technology.
            <br />
            <br/>I will love to hear from you. Whether it is a project, job
            opportunity or just a chat. Feel free to contact me!
          </p>
          <div className="home__btn-container">
            <div className="btn">
              <Link to="/projects">
                <p className="animated-button">My Projects</p>
              </Link>
            </div>
            <div className="btn" onClick={showSkill}>
              <p className="animated-button">My Skills</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
