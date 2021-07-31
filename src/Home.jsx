import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header id="homepage" data-section="home">
          <span>
            <h1>S.Subha</h1>
            <h4>B.E in Electronics and Communication Engineering</h4>
          </span>
          <div>
            <img
              src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              id="img"
            ></img>
          </div>
          <div>
            <h4>Email: subhasundar664@gmail.com</h4>
            <h4>Github:https://github.com/SubhaSundaram</h4>
          </div>
        </header>
        <p>
          Open to work in a challenging career which provides me an opportunity
          to improve my skills and knowledge to grow along with company’s
          objective . Aspiring to explore new technologies and learn everyday to
          develop my potential to the standards set by the organization.
        </p>
      </div>
    )
  }
}

export default Home
