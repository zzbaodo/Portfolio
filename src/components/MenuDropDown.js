import React from "react"
import { Link } from "react-router-dom"
import "./MenuDropDown.css"
const MenuDropDown = () => {
  return (
    <>
      <div className="menuDropDown" data-aos="fade-right">
        <ul>
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
    </>
  )
}

export default MenuDropDown
