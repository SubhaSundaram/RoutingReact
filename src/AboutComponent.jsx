import React, { Component } from 'react'
import './About.css'
import Home from './Home'
class AboutComponent extends Component {
  render() {
    return (
      <div className="cont">
        <div id="underline"></div>
        <div id="design">
          <div>
            <Home />
          </div>
          <div id="about">
            <p id="obj">
              <i>
                Hi everyone ! Iam Subha S. Iam a passionate Engineer who is
                currently working in GAVS Technologies who is aspiring to become
                a Full Stack developer. I found out my interest in coding during
                my college days where we used to attend extra classes for
                placements. It was the time when i fell in love with coding but
                couldn't pursue to the fullest. Iam here as a PROGRAD today to
                start chasing my passion in the coding world.
              </i>
            </p>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <h5>GAVS Technologies, Chennai Engineer, February 2020-Present</h5>
            <p>
              <ul>
                <li>
                  Working as a Service desk engineer to provide the initial
                  point of contact with the users resolving the incidents
                  reported by them. To provide a communication channel between
                  other service management functions and the user community.
                </li>
                <li>
                  Working in 24/7 Infrastructure environment for IT Operations,
                  Technical Support, Server Monitoring, Account Administration,
                  Azure Operations Dealing with incoming faults in a
                  professional, courteous manner over the phone and via email.
                </li>
                <li>
                  {' '}
                  Capturing change requests, maintaining 3rd party support
                  contracts, managing software licenses and assisting with
                  problem management
                </li>
                <li>
                  Handling & resolving Incidents from Service Now tool on
                  various issues on different SLA Resolving issues relating to
                  PCs or laptops, printers, scanners, phones, VoIP, besides the
                  Intranet, LAN, and WAN, hardware, and software
                </li>
              </ul>
            </p>
            <h3>Rising Stars Mobile India Pvt Ltd, Kanchipuram </h3>
            <h5>Production Engineer, June 2018-December 2019 </h5>
            <p>
              Concurrent with education, worked as a line leader in fast-paced
              assembly line of PCBA manufacturing. Roles and Responsibilities:
              To utilize the managing and analytical skills with professional
              approach towards people for building of team.
            </p>
            <h3>KG Information Systems Pvt Ltd, Coimbatore </h3>
            <h5>Intern as Full Stack Web Developer, Jan 2018-May 2018</h5>
            <p>
              Got placed in the off-campus interview, enrolled as an intern for
              full stack web development programme. Completed final year
              project in the technologies including spring, hibernate and
              angular as front end with Java as a basic coding language in Maven
              .
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent
