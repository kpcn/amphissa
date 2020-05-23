import React from "react"
import { FaPlay } from 'react-icons/fa'
import feature from '../assets/images/feature.png'

const AboutUs = () => {
  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 text-center mx-auto">
            <h4 className="sub-title">video</h4>
            <div className="space-sm"></div>
            <h2>Lorem ipsum dolor</h2>
            <div className="space-md"></div>
            <a href="/#" className="video-wrapper text-center d-block">
              {<img
                src={feature}
                alt="About us"
                className="img-fluid"
              /> }
              <div className="play-btn">
                {/* <i className="fas fa-play"></i> */}
                <FaPlay />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
