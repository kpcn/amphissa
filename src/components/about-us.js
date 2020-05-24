import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import { FaPlay } from "react-icons/fa"

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "feature.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
              <Image 
                fluid={data.file.childImageSharp.fluid}
                alt="About us" className="img-fluid"
              />
              <div className="play-btn">
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
