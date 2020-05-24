import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      clientOneImg: file(relativePath: { eq: "client-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clientTwoImg: file(relativePath: { eq: "client-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clientThreeImg: file(relativePath: { eq: "client-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="section testimonials bg-light p-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <Image
                fluid={data.clientOneImg.childImageSharp.fluid}
                className="card-img"
                alt="testimonails"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <Image
                fluid={data.clientTwoImg.childImageSharp.fluid}
                className="card-img"
                alt="testimonails"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <Image
                fluid={data.clientThreeImg.childImageSharp.fluid}
                className="card-img"
                alt="testimonails"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <Image
                fluid={data.clientTwoImg.childImageSharp.fluid}
                className="card-img"
                alt="testimonails"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
