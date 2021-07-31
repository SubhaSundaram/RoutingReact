import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import './Home.css'
import AboutComponent from './AboutComponent'
import ProjectComponent from './ProjectComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div id="body">
            <div>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </div>
            <div>
              <Link to="/about">
                <h1>About Me</h1>
              </Link>
            </div>
            <div>
              <Link to="/projects">
                <h1>Click here to know my Projects</h1>
              </Link>
            </div>
          </div>
        </nav>

        <Switch>
          <div id="content">
            <Route exact path="/">
              <div id="defaultpage">
                <Home />
              </div>
            </Route>
            <Route path="/about">
              <div id="aboutpage">
                <AboutComponent />
              </div>
            </Route>
            <Route path="/projects">
              <div id="projects">
                <ProjectComponent />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App
