import React from "react"

import Layout from "../components/layout"
import Feature from "../components/feature"
import Whatsnew from "../components/whats-new"
import Testimonials from "../components/testimonials"
import AboutUs from "../components/about-us"

import feature from '../assets/images/feature.png'

const IndexPage = () => (
  <Layout>
    <AboutUs />
    <div id="features">
      <Feature imgSrc={feature}>
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
      <Feature imgSrc={feature} rightToLeft={true}>
        <h2 class="title text-primary">
          Lorem ipsum <span>dolor urna sed</span>
        </h2>
        <div class="space-sm"></div>
        <p class="lead">
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

export default IndexPage
