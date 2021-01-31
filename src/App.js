import "./App.css"
import Header from "./components/Header"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./screens/Home"
function App() {
  return (
    <Router>
      <Header />
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App
