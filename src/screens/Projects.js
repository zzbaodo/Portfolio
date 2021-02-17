import React from "react"
import "./Projects.css"
import Project from "../components/Project"
import Video from "../videos/video.mp4"
const Projects = () => {
  return (
    <div className="projects__container">
      <h2>Works & Projects:</h2>
      <div className="wrapper">
        <Project
          image={`https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png`}
          desc={`An Ecommerce Web App with user authentication using jsonwebstoken`}
          types={["Web App", "Ecommerce"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Redux",
            "NodeJS",
            "ExpressJS",
            "HTML/CSS",
            "Bootstrap",
            "Express",
            "MongoDB",
          ]}
          date="Sep 2020"
          video={Video}
        />
        <Project
          image={`../../images/ttlogo.png`}
          desc={`A Chat Application where user can create a channel and chat with others. Log in using Google account. `}
          types={["Web App", "Chat App", "Entertainment"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Google Auth",
            "ExpressJS",
            "HTML/CSS",
            "Context API",
          ]}
          date="Nov 2020"
        />
        <Project
          image={`../../images/detbeauty.png`}
          desc={`A PMU artist's website, where customers can find related information, book appointment, and view her works `}
          types={["Web App", "Business Website", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Boostrap",
            "NodeMailer",
            "HTML/CSS",
            "Context API",
          ]}
          date="Feb 2021"
        />
        <Project
          image={`../../images/detbeauty.png`}
          desc={`A PMU artist's website, where customers can find related information, book appointment, and view her works `}
          types={["Web App", "Business Website", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Boostrap",
            "NodeMailer",
            "HTML/CSS",
            "Context API",
          ]}
          date="Feb 2021"
        />
        <Project
          image={`../../images/detbeauty.png`}
          desc={`A PMU artist's website, where customers can find related information, book appointment, and view her works `}
          types={["Web App", "Business Website", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Boostrap",
            "NodeMailer",
            "HTML/CSS",
            "Context API",
          ]}
          date="Feb 2021"
        />
        <Project
          image={`../../images/detbeauty.png`}
          desc={`A PMU artist's website, where customers can find related information, book appointment, and view her works `}
          types={["Web App", "Business Website", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Boostrap",
            "NodeMailer",
            "HTML/CSS",
            "Context API",
          ]}
          date="Feb 2021"
        />
      </div>
    </div>
  )
}

export default Projects
