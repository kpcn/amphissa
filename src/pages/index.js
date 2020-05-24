import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Feature from "../components/feature"
import Whatsnew from "../components/whats-new"
import Testimonials from "../components/testimonials"
import AboutUs from "../components/about-us"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <AboutUs />
      <div id="features">
        <Feature imgSrc={data.file.childImageSharp.fluid}>
          <h2 className="title text-primary">
            Lorem ipsum <span>dolor urna sed</span>
          </h2>
          <div className="space-sm"></div>
          <p className="lead">
            Cras aliquam, urna sed bibendum placerat nunc urna imperdiet est ac
            laoreet justo dui vel lorem. Nullam at felis sit amet lorem pretium
            sodales et non urna.
          </p>
        </Feature>
        <Feature imgSrc={data.file.childImageSharp.fluid} rightToLeft={true}>
          <h2 className="title text-primary">
            Lorem ipsum <span>dolor urna sed</span>
          </h2>
          <div className="space-sm"></div>
          <p className="lead">
            Cras aliquam, urna sed bibendum placerat nunc urna imperdiet est ac
            laoreet justo dui vel lorem. Nullam at felis sit amet lorem pretium
            sodales et non urna.
          </p>
        </Feature>
      </div>
      <Whatsnew id="whats-new" />
      <Testimonials />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "feature.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
