import React, { useState, useEffect } from "react"
import "./Header.css"
import { NavLink } from "react-router-dom"
import { Sling as Hamburger } from "hamburger-react"
import MenuDropDown from "./MenuDropDown"
const Header = () => {
  const [show, setShow] = useState(false)
  const onClickHandler = () => {
    setShow(!show)
  }
  let homeActive
  let projectsActive
  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/home"
    ) {
      homeActive = "active"
      projectsActive = "none"
      console.log("home is active")
    } else {
      projectsActive = "active"
      homeActive = "none"
      console.log("project is active")
    }
  }, [window.location.pathname])
  return (
    <>
      <div className="header__container">
        <div className="navbar">
          <div className="image-container">
            <NavLink to="/">
              <img
                src="../../images/logo.PNG"
                alt="logo"
                className="logo"
              ></img>
            </NavLink>
          </div>
          <ul className="list-group">
            <NavLink exact to="/home" activeClassName="active1">
              <li className={`navbar-list-item `}>Home</li>
            </NavLink>
            <NavLink exact to="/projects" activeClassName="active1">
              <li className={`navbar-list-item `}>Projects</li>
            </NavLink>

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
          <Hamburger onToggle={onClickHandler} />
        </div>
      </div>
      {show && <MenuDropDown />}
    </>
  )
}

export default Header
