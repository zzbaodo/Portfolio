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
            <li className="navbar-list-item">About</li>
          </Link>

          <li className="navbar-list-item">Resume</li>
          <li className="navbar-list-item">Project</li>
          <li className="navbar-list-item">Github</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
