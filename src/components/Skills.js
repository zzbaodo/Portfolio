import React, { useState } from "react"
import "./Skills.css"
const Skills = ({ showSkill }) => {
  const [showFrontEnd, setShowFrontEnd] = useState(true)
  const [showBackEnd, setShowBackEnd] = useState(false)
  const [showMisc, setShowMisc] = useState(false)

  const frontEnd = (
    <>
      <div className="bar">
        <h3>HTML5</h3>
        <span className="span1 animated"></span>
      </div>
      <div className="bar">
        <h3>CSS</h3>
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
        <h3>Redux</h3>
        <span className="span6 animated"></span>
      </div>
      <div className="bar">
        <h3>NextJS</h3>
        <span className="span7 animated"></span>
      </div>
      <div className="bar">
        <h3>Sass</h3>
        <span className="span8 animated"></span>
      </div>
    </>
  )
  const backEnd = (
    <>
      <div className="bar">
        <h3>NodeJS</h3>
        <span className="span9 animated"></span>
      </div>

      <div className="bar">
        <h3>Express</h3>
        <span className="span10 animated"></span>
      </div>
      <div className="bar">
        <h3>MongoDB</h3>
        <span className="span11 animated"></span>
      </div>
      <div className="bar">
        <h3>MERN Stack</h3>
        <span className="span15 animated"></span>
      </div>
      <div className="bar">
        <h3>Firebase</h3>
        <span className="span12 animated"></span>
      </div>
      <div className="bar">
        <h3>Object-Oriented-Programming</h3>
        <span className="span13 animated"></span>
      </div>
      <div className="bar">
        <h3>Python</h3>
        <span className="span14 animated"></span>
      </div>
    </>
  )
  const misc = (
    <div className="misc-container" data-aos="fade-up">
      <div className="logo-container">
        <img
          src="https://thumbs.dreamstime.com/b/seo-logo-magnifying-glass-search-engine-optimization-blue-yellow-red-green-color-98240334.jpg"
          alt="SEO"
        />
        <h4>SEO </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://zakharpetukhov.website/img/git.a753e089.png"
          alt="Git"
        />
        <h4>Git </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://authy.com/wp-content/uploads/npm-logo.png"
          alt="NPM"
        />
        <h4>NPM </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://miro.medium.com/max/3144/1*RdKDZ6CE5yWJlnKEMoa1HQ.png"
          alt="Webpack"
        />
        <h4>Webpack </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png"
          alt="heroku"
        />
        <h4>Heroku </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfu1mi6LAfuv1HSVFYUtOVgBsIB5f96Ui_Xw&usqp=CAU"
          alt="github"
        />
        <h4>Github </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://images.techhive.com/images/article/2015/05/aws-logo-100584713-orig.jpg"
          alt="AWS"
        />
        <h4>AWS </h4>
      </div>
      <div className="logo-container">
        <img
          src="https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg"
          alt="Netlify"
        />
        <h4>Netlify </h4>
      </div>
    </div>
  )
  const onClickHandler = (e) => {
    if (e.target.innerText === "Front-End") {
      setShowBackEnd(false)
      setShowFrontEnd(true)
      setShowMisc(false)
    } else if (e.target.innerText === "Back-End") {
      setShowBackEnd(true)
      setShowFrontEnd(false)
      setShowMisc(false)
    } else {
      setShowBackEnd(false)
      setShowFrontEnd(false)
      setShowMisc(true)
    }
  }
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
        <div className="skills__title">
          <div
            className={`skills__heading ${showFrontEnd && "heading-active"}`}
            onClick={onClickHandler}
          >
            <h2>Front-End</h2>
          </div>
          <div
            className={`skills__heading ${showBackEnd && "heading-active"}`}
            onClick={onClickHandler}
          >
            <h2>Back-End</h2>
          </div>
          <div
            className={`skills__heading ${showMisc && "heading-active"}`}
            onClick={onClickHandler}
          >
            <h2>Miscellaneous</h2>
          </div>
        </div>
        <div className="skills-wrapper">
          {showFrontEnd && frontEnd}
          {showBackEnd && backEnd}
          {showMisc && misc}
        </div>
      </div>
    </>
  )
}

export default Skills
