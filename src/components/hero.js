import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag={`div`}
      className="jumbotron jumbotron-fluid bg-transparent hero section m-0"
      fluid={data.file.childImageSharp.fluid}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mr-lg-auto">
            <div className="hero-content text-center text-lg-left">
              <h1 className="hero-title">Lorem ipsum dolor sit amet</h1>
              <div className="space-md"></div>
              <p className="lead">
                Cras aliquam, urna sed bibendum placerat nunc urna imperdiet est
                ac laoreet justo dui vel lorem. Nullam at felis sit amet lorem
                pretium sodales et non urna.
              </p>
              <div className="space-md"></div>
              <a href="/#" className="btn btn-lg btn-secondary">
                Get it free
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
