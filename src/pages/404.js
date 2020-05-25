import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

import Watermelon404 from "../assets/images/watermelon-404.svg"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="d-flex flex-row ">
        <div className="d-flex flex-column not-found">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness. you can go back to <Link to="/">home page</Link></p>
          <img src={Watermelon404} alt="oms" className="align-self-center" />
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
