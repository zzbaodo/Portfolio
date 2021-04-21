import React from "react"
import "./Projects.css"
import Project from "../components/Project"
// import Video from "../videos/video.mp4"
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
          
          src="https://shoppieapp.herokuapp.com/"
        />
        <Project
          src="https://competent-rosalind-e2f70a.netlify.app/"
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
          src="https://eager-mirzakhani-d50fa9.netlify.app"
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
          src="https://arcane-meadow-67732.herokuapp.com/"
          image={`https://www.spacex.com/static/images/share.jpg`}
          desc={`An application to view spaceX's rockets launches using graphQL and Apollo`}
          types={["Web App", "Informative"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "GraphQL",
            "Boostrap",
            "Apollo",
            "HTML/CSS",
            "SpaceX API",
          ]}
          date="Feb 2021"
        />
        <Project
          src="https://storecontact.herokuapp.com/"
          image={`../../images/phonebook.jpg`}
          desc={`A book keeping application. User can log in and add people in their contact book. Features including filtering, react animation, ...  `}
          types={["Web App", "Personal Project", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "MongoDB",
            "Boostrap",
            "Context API",
            "HTML/CSS",
            "ExpressJS",
            "Bcrypt",
            "JasonWebToken",
          ]}
          date="Feb 2021"
        />
        <Project
          src="https://memories-app-mern-1340.herokuapp.com/"
          image={`../../images/memory.png`}
          desc={`An app where user can post photos of their memory for others to see `}
          types={["Web App", "Business Website", "Beauty"]}
          roles={["UI/UX", "Developer"]}
          tech={[
            "ReactJS",
            "Firebase",
            "Material UI",
            "MongoDB",
            "HTML/CSS",
            "Redux",
          ]}
          date="Feb 2021"
        />
      </div>
    </div>
  )
}

export default Projects
