import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    Twitter
                  </a>
                </li>
              </ul>
              <div className="copyright">
                &copy; Copyright. All rights reserved. Theme by{" "}
                <a href="https://themesfor.app">Themes For App</a> |
                💖
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
