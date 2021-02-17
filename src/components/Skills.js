import React from "react"
import "./Skills.css"
const Skills = ({ showSkill }) => {
  return (
    <>
      <div className="backdrop" onClick={showSkill}></div>
      <div className="skills__container">
        <div className="skills__header">
          <h2>Skills</h2>
          <div className="close-container" onClick={showSkill}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </div>

        <div className="bar">
          <h3>HTML5</h3>
          <span className="span1 animated"></span>
        </div>
        <div className="bar">
          <h3>CSS3</h3>
          <span className="span2 animated"></span>
        </div>
        <div className="bar">
          <h3>Javascript</h3>
          <span className="span3 animated"></span>
        </div>
        <div className="bar">
          <h3>BootStrap</h3>
          <span className="span4 animated"></span>
        </div>
        <div className="bar">
          <h3>ReactJS</h3>
          <span className="span5 animated"></span>
        </div>
        <div className="bar">
          <h3>NodeJS</h3>
          <span className="span6 animated"></span>
        </div>
        <div className="bar">
          <h3>ExpressJS</h3>
          <span className="span7 animated"></span>
        </div>
        <div className="bar">
          <h3>MERN Stack</h3>
          <span className="span9 animated"></span>
        </div>
        <div className="bar">
          <h3>Firebase</h3>
          <span className="span8 animated"></span>
        </div>
      </div>
    </>
  )
}

export default Skills
