import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header__container">
      <div className="navbar">
        <div className="image-container">
          <img src="../../images/logo.PNG" alt="logo"></img>
        </div>
        <ul className="list-group">
          <Link to="/home">
            <li className="navbar-list-item">Home</li>
          </Link>
          <Link to="/projects">
            <li className="navbar-list-item">Projects</li>
          </Link>

          <li className="navbar-list-item">
            <a href="../../images/resume.png" target="_blank">
              Resume
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="https://github.com/zzbaodo" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
