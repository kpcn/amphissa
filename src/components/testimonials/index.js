import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Item from "./item"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: { original: { src: { regex: "/client/" } } }) {
        edges {
          node {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <section className="section testimonials bg-light p-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <Item image={data.allImageSharp.edges[0].node.fluid} link="/#">
            <h5 className="card-title">Lorem ipsum</h5>
            <p className="card-text">
              Cras aliquam, urna sed bibendum placerat nunc urna
            </p>
          </Item>
          <Item image={data.allImageSharp.edges[1].node.fluid} link="/#">
            <h5 className="card-title">Lorem ipsum</h5>
            <p className="card-text">
              Cras aliquam, urna sed bibendum placerat nunc urna
            </p>
          </Item>
          <Item image={data.allImageSharp.edges[2].node.fluid} link="/#">
            <h5 className="card-title">Lorem ipsum</h5>
            <p className="card-text">
              Cras aliquam, urna sed bibendum placerat nunc urna
            </p>
          </Item>
          <Item image={data.allImageSharp.edges[1].node.fluid} link="/#">
            <h5 className="card-title">Lorem ipsum</h5>
            <p className="card-text">
              Cras aliquam, urna sed bibendum placerat nunc urna
            </p>
          </Item>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
