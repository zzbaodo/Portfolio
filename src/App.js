import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./screens/Home"
import Resume from './screens/Resume'
import Projects from './screens/Projects'

function App() {
  return (
    <Router>
      {/* <div className="cover">
        <div class="intro-text">
          <h1 class="hide1">
            <span class="text">Driven by Passion</span>
          </h1>
          <h1 class="hide2">
            <span class="text">Progress by Inovation</span>
          </h1>
          <h1 class="hide3">
            <span class="text">
              A Journey Began<span className="exclaim">!</span>{" "}
            </span>
          </h1>
        </div>
      </div> */}
      <main>
        <Header />
        <Route path="/resume" component={Resume} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Home} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
