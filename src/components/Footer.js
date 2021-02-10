import React from "react"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="icon-container">
          <span className="icon">
            <i class="fab fa-github" />
          </span>
          <a href="https://github.com/zzbaodo" target="_blank">
            Github Link
          </a>
        </div>
        <div className="icon-container">
          <span className="icon">
            <i class="fas fa-envelope-open-text"></i>
          </span>
          <a href="mailto:zzbaodo@gmail.com">zzbaodo@gmail.com</a>
        </div>
        <div className="icon-container">
          <span className="icon">
            <i class="fas fa-phone"></i>
          </span>
          <a href="tel:5094159138">(509) 415-9138</a>
        </div>
        <div className="icon-container">
          <span className="icon">
            <i class="far fa-file-alt"></i>
          </span>
          <a href="../../images/resume.png" target="_blank">
            Resume
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
