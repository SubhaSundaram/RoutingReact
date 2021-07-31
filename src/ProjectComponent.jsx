import React, { Component } from 'react'
import Home from './Home'
import './Project.css'
class ProjectComponent extends Component {
  render() {
    return (
      <div id="projectdispay">
        <div>
          <Home />
        </div>
        <div id="projdesc">
          <h3>DORA-The Explorer</h3>
          <p>
            DESCRIPTION:The project-DORA takes you to the exciting journey where
            you'll travel along DORA to reach her home. It uses HTML,CSS and JS
            for the design with API, TIMER and much more concepts to give a cool
            gaming experience.
          </p>
          <h3> PROJECT TITLE: EMANSYS - EVENT MANAGEMENT SYSTEM) </h3>
          <p>
            DESCRIPTION: Managing events by a single handed operation is a
            hectic work in today’s fastest world. To make it simple for engaged
            people ,Event management system is been designed . It is a web
            application which is built with Java which includes Springboot
            framework to build stand-alone application with angular for front
            end design.
          </p>
        </div>
      </div>
    )
  }
}

export default ProjectComponent
